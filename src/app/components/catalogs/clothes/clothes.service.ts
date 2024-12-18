// private clothes = [
//   {
//     id: 1,
//     name: 'Футболка Classic Unisex',
//     price: 4000,
//     images: [
//       '/assets/catalogs/clothes/tshirt-classic-unisex-1.jpg',
//       '/assets/catalogs/clothes/tshirt-classic-unisex-2.jpg',
//     ],
//     category: 'Футболки',
//   },
//   {
//     id: 2,
//     name: 'Футболка Oversize Unisex',
//     price: 4500,
//     images: [
//       '/assets/catalogs/clothes/tshirt-oversize-unisex-1.jpg',
//       '/assets/catalogs/clothes/tshirt-oversize-unisex-2.jpg',
//     ],
//     category: 'Футболки',
//   },
//   {
//     id: 3,
//     name: 'Детские свитшоты Oversize',
//     price: 4000,
//     images: [
//       '/assets/catalogs/clothes/sweatshirt-oversize-kids-1.jpg',
//       '/assets/catalogs/clothes/sweatshirt-oversize-kids-2.jpg',
//     ],
//     category: 'Детские свитшоты',
//   },
//   {
//     id: 4,
//     name: 'Худи Oversize Unisex',
//     price: 8900,
//     images: [
//       '/assets/catalogs/clothes/hoodie-oversize-unisex-1.jpg',
//       '/assets/catalogs/clothes/hoodie-oversize-unisex-2.jpg',
//     ],
//     category: 'Худи',
//   },
//   {
//     id: 5,
//     name: 'Свитшот Classic Kids',
//     price: 5500,
//     images: [
//       '/assets/catalogs/clothes/sweatshirt-classic-kids-1.jpg',
//       '/assets/catalogs/clothes/sweatshirt-classic-kids-2.jpg',
//     ],
//     category: 'Детские свитшоты',
//   },
//   {
//     id: 6,
//     name: 'Футболка Premium Unisex',
//     price: 6000,
//     images: [
//       '/assets/catalogs/clothes/tshirt-premium-unisex-1.jpg',
//       '/assets/catalogs/clothes/tshirt-premium-unisex-2.jpg',
//     ],
//     category: 'Футболки',
//   },
//   {
//     id: 7,
//     name: 'Свитшот Oversize Unisex',
//     price: 6500,
//     images: [
//       '/assets/catalogs/clothes/sweatshirt-oversize-unisex-1.jpg',
//       '/assets/catalogs/clothes/sweatshirt-oversize-unisex-2.png',
//     ],
//     category: 'Свитшоты',
//   },
//   {
//     id: 8,
//     name: 'Детская футболка Classic',
//     price: 3500,
//     images: [
//       '/assets/catalogs/clothes/tshirt-classic-kids-1.jpg',
//       '/assets/catalogs/clothes/tshirt-classic-kids-2.jpg',
//     ],
//     category: 'Детские футболки',
//   },
//   {
//     id: 9,
//     name: 'Худи Premium Unisex',
//     price: 9500,
//     images: [
//       '/assets/catalogs/clothes/hoodie-premium-unisex-1.jpg',
//       '/assets/catalogs/clothes/hoodie-premium-unisex-2.jpg',
//     ],
//     category: 'Худи',
//   },
//   {
//     id: 10,
//     name: 'Футболка Standard Unisex',
//     price: 5000,
//     images: [
//       '/assets/catalogs/clothes/tshirt-standard-unisex-1.jpg',
//       '/assets/catalogs/clothes/tshirt-standard-unisex-2.jpg',
//     ],
//     category: 'Футболки',
//   },
//   {
//     id: 11,
//     name: 'Свитшот Basic Unisex',
//     price: 6000,
//     images: [
//       '/assets/catalogs/clothes/sweatshirt-basic-unisex-1.jpg',
//       '/assets/catalogs/clothes/sweatshirt-basic-unisex-2.jpg',
//     ],
//     category: 'Свитшоты',
//   },
//   {
//     id: 12,
//     name: 'Детский худи Classic',
//     price: 8000,
//     images: [
//       '/assets/catalogs/clothes/hoodie-classic-kids-1.jpg',
//       '/assets/catalogs/clothes/hoodie-classic-kids-2.jpg',
//     ],
//     category: 'Детские худи',
//   },
// ];
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../elements/product/interfaces/product.interface';


@Injectable({
  providedIn: 'root',
})
export class ClothesService {
  private clothes = [
  {
    id: 1,
    name: 'Футболка Classic Unisex',
    price: 4000,
    images: [
      '/assets/catalogs/clothes/tshirt-classic-unisex-1.jpg',
      '/assets/catalogs/clothes/tshirt-classic-unisex-2.jpg',
    ],
    category: 'Футболки',
  },
  {
    id: 2,
    name: 'Футболка Oversize Unisex',
    price: 4500,
    images: [
      '/assets/catalogs/clothes/tshirt-oversize-unisex-1.jpg',
      '/assets/catalogs/clothes/tshirt-oversize-unisex-2.jpg',
    ],
    category: 'Футболки',
  },
  {
    id: 3,
    name: 'Детские свитшоты Oversize',
    price: 4000,
    images: [
      '/assets/catalogs/clothes/sweatshirt-oversize-kids-1.jpg',
      '/assets/catalogs/clothes/sweatshirt-oversize-kids-2.jpg',
    ],
    category: 'Детские свитшоты',
  },
  {
    id: 4,
    name: 'Худи Oversize Unisex',
    price: 8900,
    images: [
      '/assets/catalogs/clothes/hoodie-oversize-unisex-1.jpg',
      '/assets/catalogs/clothes/hoodie-oversize-unisex-2.jpg',
    ],
    category: 'Худи',
  },
  {
    id: 2,
    name: 'Футболка Oversize Unisex',
    price: 4500,
    images: [
      '/assets/catalogs/clothes/tshirt-oversize-unisex-1.jpg',
      '/assets/catalogs/clothes/tshirt-oversize-unisex-2.jpg',
    ],
    category: 'Футболки',
  },
  {
    id: 2,
    name: 'Футболка Oversize Unisex',
    price: 4500,
    images: [
      '/assets/catalogs/clothes/tshirt-oversize-unisex-1.jpg',
      '/assets/catalogs/clothes/tshirt-oversize-unisex-2.jpg',
    ],
    category: 'Футболки',
  },
  {
    id: 7,
    name: 'Свитшот Oversize Unisex',
    price: 6500,
    images: [
      '/assets/catalogs/clothes/sweatshirt-oversize-unisex-1.jpg',
      '/assets/catalogs/clothes/sweatshirt-oversize-unisex-2.png',
    ],
    description: ["Комфортная посадка: фасон оверсайз обеспечивает свободу движений и комфортную посадку.", "Высокое качество материала: 80% хлопка и 20% полиэстера обеспечивают мягкость, износостойкость и приятные ощущения при ношении.", "Универсальный стиль: свитшот подходит как мужчинам, так и женщинам.", "Плотность ткани: 280-300 гр.", "Производство: Узбекистан.", "Оптовая печать просчитывается индивидуально."],
    category: 'Oversize свитшоты',
  },
  {
    id: 8,
    name: 'Свитшот Oversize Unisex',
    price: 6500,
    images: [
      '/assets/catalogs/clothes/sweatshirt-oversize-unisex-1.jpg',
      '/assets/catalogs/clothes/sweatshirt-oversize-unisex-2.png',
    ],
    category: 'Свитшоты',
  },
  {
    id: 9,
    name: 'Свитшот Oversize Unisex',
    price: 6500,
    images: [
      '/assets/catalogs/clothes/sweatshirt-oversize-unisex-1.jpg',
      '/assets/catalogs/clothes/sweatshirt-oversize-unisex-2.png',
    ],
    category: 'Свитшоты',
  },
  {
    id: 10,
    name: 'Свитшот Oversize Unisex',
    price: 6500,
    images: [
      '/assets/catalogs/clothes/sweatshirt-oversize-unisex-1.jpg',
      '/assets/catalogs/clothes/sweatshirt-oversize-unisex-2.png',
    ],
    category: 'Свитшоты',
  },
  {
    id: 11,
    name: 'Свитшот Oversize Unisex',
    price: 6500,
    images: [
      '/assets/catalogs/clothes/sweatshirt-oversize-unisex-1.jpg',
      '/assets/catalogs/clothes/sweatshirt-oversize-unisex-2.png',
    ],
    category: 'Свитшоты',
  },
  {
    id: 12,
    name: 'Худи Oversize Unisex',
    price: 8900,
    images: [
      '/assets/catalogs/clothes/hoodie-oversize-unisex-1.jpg',
      '/assets/catalogs/clothes/hoodie-oversize-unisex-2.jpg',
    ],
    category: 'Худи',
  },
  {
    id: 12,
    name: 'Худи Oversize Unisex',
    price: 8900,
    images: [
      '/assets/catalogs/clothes/hoodie-oversize-unisex-1.jpg',
      '/assets/catalogs/clothes/hoodie-oversize-unisex-2.jpg',
    ],
    category: 'Худи',
  },
];

  getClothes(): Observable<Product[]> {
    return of(this.clothes);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.clothes.find((item) => item.id === id);
    return of(product);
  }
}
