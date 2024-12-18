import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private clothes = [
    {
      id: 1,
      name: 'Футболка Classic Unisex',
      price: 4000,
      images: ['/assets/catalogs/clothes/tshirt-classic-unisex-1.jpg', '/assets/catalogs/clothes/tshirt-classic-unisex-2.jpg'],
      category: 'Футболки',
    },
    {
      id: 2,
      name: 'Футболка Oversize Unisex',
      price: 4500,
      images: ['/assets/catalogs/clothes/tshirt-oversize-unisex-1.jpg', '/assets/catalogs/clothes/tshirt-oversize-unisex-2.jpg'],
      category: 'Футболки',
    },
    {
      id: 3,
      name: 'Детские свитшоты Oversize',
      price: 4000,
      images: ['/assets/catalogs/clothes/sweatshirt-oversize-kids-1.jpg', '/assets/catalogs/clothes/sweatshirt-oversize-kids-2.jpg'],
      category: 'Детские свитшоты',
    },
    {
      id: 4,
      name: 'Худи Oversize Unisex',
      price: 8900,
      images: ['/assets/catalogs/clothes/hoodie-oversize-unisex-1.jpg', '/assets/catalogs/clothes/hoodie-oversize-unisex-2.jpg'],
      category: 'Худи',
    },
    {
      id: 5,
      name: 'Футболка Oversize Unisex',
      price: 8900,
      images: ['/assets/catalogs/clothes/tshirt-oversize-unisex-1.jpg', '/assets/catalogs/clothes/tshirt-oversize-unisex-2.jpg'],
      category: 'Футболки',
    },
    {
      id: 6,
      name: 'Худи Oversize Unisex',
      price: 8900,
      images: ['/assets/catalogs/clothes/hoodie-oversize-unisex-1.jpg', '/assets/catalogs/clothes/hoodie-oversize-unisex-2.jpg'],
      category: 'Худи',
    },
    {
      id: 7,
      name: 'Худи Oversize Unisex',
      price: 8900,
      images: ['/assets/catalogs/clothes/hoodie-oversize-unisex-1.jpg', '/assets/catalogs/clothes/hoodie-oversize-unisex-2.jpg'],
      category: 'Худи',
    },


  ];

  getProductById(id: number): Observable<any> {
    const product = this.clothes.find((item) => item.id === id);
    return of(product);
  }

  getClothes() {
    return this.clothes;
  }
}
