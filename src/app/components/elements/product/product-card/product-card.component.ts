import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductCardComponent {
  @Input() product: any;

  currentImage: string | undefined;

  ngOnInit() {
    this.currentImage = this.product.images[0];
  }


  showNextImage() {
    if (this.product.images.length > 1) {
      this.currentImage = this.product.images[1];
    }
  }

  // Возврат к первой картинке
  showDefaultImage() {
    this.currentImage = this.product.images[0];
  }
}
