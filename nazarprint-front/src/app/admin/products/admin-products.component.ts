import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdminProductsService } from '../services/admin-products.service';
import { AdminAuthService } from '../services/admin-auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  total = 0;
  page = 1;
  limit = 20;
  loading = false;
  searchTerm = '';
  selectedCategory = '';

  showForm = false;
  editingId: number | null = null;
  formLoading = false;
  formError = '';
  deleteConfirmId: number | null = null;

  form!: FormGroup;

  imagesInput = '';

  constructor(
    private productsService: AdminProductsService,
    private auth: AdminAuthService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.loadCategories();
    this.loadProducts();
  }

  buildForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      categoryId: [null, Validators.required],
      type: [''],
      subcategory: [''],
      description: [''],
      colors: [''],
      formats: [''],
    });
  }

  loadCategories(): void {
    const headers = new HttpHeaders({ Authorization: `Bearer ${this.auth.getToken()}` });
    this.http.get<any>(`${environment.apiUrl}/categories`, { headers }).subscribe({
      next: res => this.categories = res.data || [],
      error: () => {}
    });
  }

  loadProducts(): void {
    this.loading = true;
    const params: any = { page: this.page, limit: this.limit };
    if (this.searchTerm) params.search = this.searchTerm;
    if (this.selectedCategory) params.categoryId = Number(this.selectedCategory);

    this.productsService.getProducts(params).subscribe({
      next: res => {
        this.products = res.data;
        this.total = res.total;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  onSearch(): void {
    this.page = 1;
    this.loadProducts();
  }

  prevPage(): void {
    if (this.page > 1) { this.page--; this.loadProducts(); }
  }

  nextPage(): void {
    if (this.page * this.limit < this.total) { this.page++; this.loadProducts(); }
  }

  openCreate(): void {
    this.editingId = null;
    this.imagesInput = '';
    this.form.reset();
    this.formError = '';
    this.showForm = true;
  }

  openEdit(product: any): void {
    this.editingId = product.id;
    this.imagesInput = product.images?.map((i: any) => i.url).join('\n') || '';
    this.form.patchValue({
      name: product.name,
      price: product.price,
      categoryId: product.categoryId,
      type: product.type || '',
      subcategory: product.subcategory || '',
      description: product.description?.join('\n') || '',
      colors: product.colors?.join(', ') || '',
      formats: product.formats?.join(', ') || '',
    });
    this.formError = '';
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
    this.editingId = null;
  }

  submitForm(): void {
    if (this.form.invalid) return;
    this.formLoading = true;
    this.formError = '';

    const v = this.form.value;
    const data = {
      name: v.name.trim(),
      price: Number(v.price),
      categoryId: Number(v.categoryId),
      type: v.type?.trim() || null,
      subcategory: v.subcategory?.trim() || null,
      description: v.description ? v.description.split('\n').map((s: string) => s.trim()).filter(Boolean) : [],
      colors: v.colors ? v.colors.split(',').map((s: string) => s.trim()).filter(Boolean) : [],
      formats: v.formats ? v.formats.split(',').map((s: string) => s.trim()).filter(Boolean) : [],
      images: this.imagesInput ? this.imagesInput.split('\n').map(s => s.trim()).filter(Boolean) : [],
    };

    const req$ = this.editingId
      ? this.productsService.updateProduct(this.editingId, data)
      : this.productsService.createProduct(data);

    req$.subscribe({
      next: () => {
        this.formLoading = false;
        this.closeForm();
        this.loadProducts();
      },
      error: (err) => {
        this.formLoading = false;
        this.formError = err.error?.error || 'Ошибка сохранения';
      }
    });
  }

  confirmDelete(id: number): void {
    this.deleteConfirmId = id;
  }

  cancelDelete(): void {
    this.deleteConfirmId = null;
  }

  deleteProduct(id: number): void {
    this.productsService.deleteProduct(id).subscribe({
      next: () => {
        this.deleteConfirmId = null;
        this.loadProducts();
      },
      error: () => { this.deleteConfirmId = null; }
    });
  }

  get totalPages(): number {
    return Math.ceil(this.total / this.limit);
  }
}
