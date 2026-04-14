import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product, PrintZoneConfig } from '../interfaces/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;
  isLoading: boolean = true;

  selectedImageIndex: number = 0;
  selectedColor: string = '';
  selectedSize: string = '';
  selectedPrintZone: string = '';
  selectedMethod: string = '';
  quantity: number = 1;

  activeTab: 'description' | 'specs' | 'printing' = 'description';

  category: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category') || 'clothes';
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getProductById(id, this.category).subscribe({
      next: (data: any) => {
        this.product = data;
        this.isLoading = false;
        if (this.product) {
          if (this.product.colors?.length) {
            this.selectedColor = this.product.colors[0].name;
          }
          if (this.product.sizes?.length) {
            this.selectedSize = this.product.sizes[0];
          }
          if (this.product.printZones?.length) {
            this.selectedPrintZone = this.product.printZones[0].zone;
            if (this.product.printZones[0].methods?.length) {
              this.selectedMethod = this.product.printZones[0].methods[0];
            }
          }
        }
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  get currentImage(): string {
    return this.product?.images?.[this.selectedImageIndex] || '';
  }

  get selectedZoneConfig(): PrintZoneConfig | undefined {
    return this.product?.printZones?.find(z => z.zone === this.selectedPrintZone);
  }

  get maxPrintSize(): string {
    if (!this.selectedZoneConfig || !this.selectedSize) return '';
    const sizes = this.selectedZoneConfig.maxSizes;
    return sizes[this.selectedSize] || 'Не доступно';
  }

  getMaxSize(zone: PrintZoneConfig, size: string): string {
    return zone.maxSizes[size] || '—';
  }

  get availableMethods(): string[] {
    return this.selectedZoneConfig?.methods || [];
  }

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  selectColor(colorName: string): void {
    this.selectedColor = colorName;
    // TODO: связать с imageIndex когда будет реализовано
  }

  selectSize(size: string): void {
    this.selectedSize = size;
  }

  selectPrintZone(zone: string): void {
    this.selectedPrintZone = zone;
    const zoneConfig = this.product?.printZones?.find(z => z.zone === zone);
    if (zoneConfig?.methods?.length) {
      this.selectedMethod = zoneConfig.methods[0];
    }
  }

  updateQuantity(delta: number): void {
    const newQty = this.quantity + delta;
    if (newQty >= 1 && newQty <= 1000) {
      this.quantity = newQty;
    }
  }

  setTab(tab: 'description' | 'specs' | 'printing'): void {
    this.activeTab = tab;
  }

  goBack(): void {
    this.router.navigate(['/catalogs', this.category]);
  }
}
