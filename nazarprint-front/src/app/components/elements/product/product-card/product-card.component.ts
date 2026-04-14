import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  imports: [CommonModule, RouterLink]
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  @Input() categorySlug: string = 'clothes';

  currentImage: string = '';
  isLoading: boolean = true;

  ngOnInit() {
    this.currentImage = this.product?.images?.[0] || '';
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  showNextImage() {
    if (this.product?.images?.length > 1) {
      this.currentImage = this.product.images[1];
    }
  }

  showDefaultImage() {
    this.currentImage = this.product?.images?.[0] || '';
  }

  onImageLoad() {
    this.isLoading = false;
  }
}
