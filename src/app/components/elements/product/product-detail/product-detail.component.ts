import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: any;
  selectedColor: string = ''; // Текущий выбранный цвет
  selectedImage: string = ''; // Изображение для выбранного цвета

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe((data: any) => {
      this.product = data;
      if (this.product && this.product.colors) {
        this.selectedColor = this.product.colors[0]; // Установить первый цвет по умолчанию
        this.updateImage();
      }
    });
  }

  // Обновить изображение при выборе цвета
  updateImage(): void {
    if (this.product && this.product.images) {
      this.selectedImage = this.product.images[this.selectedColor] || '';
    }
  }

  closeDetail(): void {
    this.router.navigate(['/']); // Возврат в каталог
  }
}
