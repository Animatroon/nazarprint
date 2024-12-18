import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../elements/product/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class BagsService {
  private bags: Product[] = [
    { 
        id: 1,
        name: 'Сумка холщовая ESENTAI',
        type: "Сумки SWG",
        price: 2020,
        color: ["white", "brown", "red"],
        images: ['/assets/catalogs/bags/bags-esentai-1.png', "/assets/catalogs/bags/bags-esentai-2.png"],
        methods: ['DTF', "Шелкография"],
        format: ['A6', 'A5', 'A4', 'A3',],
        description: ["Сумка для покупок ESENTAI из натурального хлопка, прочная, выдерживает нагрузку 13-15 кг.", "Размер сумки 38 x42 см.", "Ручки - полиэстер, длина ручки 70 х 3 см."],
        category: 'Шопперы'
    },
    { 
        id: 2,
        name: 'Спортивная сумка TRIUMPH',
        type: "SWG",
        price: 13500,
        color: ["gray", "dark"],
        images: ['/assets/catalogs/bags/bags-triumph-1.jpg', "/assets/catalogs/bags/bags-triumph-2.jpg"],
        methods: ['DTF', "Шелкография"],
        format: ['A6', 'A5', 'A4', 'A3',],
        description: ["Сумка для покупок ESENTAI из натурального хлопка, прочная, выдерживает нагрузку 13-15 кг.", "Размер сумки 38 x42 см.", "Ручки - полиэстер, длина ручки 70 х 3 см."],
        category: 'Спортивные сумки'
    },
    { 
        id: 3,
        name: 'Рюкзак для ноутбука SKIEF',
        type: "Рюкзак для ноутбука UC",
        price: 4950,
        color: ["gray", "blue", "red"],
        images: ['/assets/catalogs/bags/backpack-skief-1.jpg', "/assets/catalogs/bags/backpack-skief-2.jpg"],
        methods: ['DTF', "Шелкография"],
        format: ['A5', 'A4'],
        description: ["Рюкзак для ноутбука из 600D высокой плотности.", "Основное отделение с набивкой, подходит для ноутбука до 14''.", "Передний карман с молнией, задняя часть и шлейки с набивкой.", "290 x 400 x 140 мм", "Оптовая печать просчитывается индивидуально."],
        category: 'Рюкзаки'
    },
    // Добавьте оставшиеся 9 продуктов по аналогии...
    { 
        id: 4,
        name: 'Сумка холщовая APORT',
        type: "Сумки SWG",
        price: 1600,
        color: ["black", "blue", "brown", "red"],
        images: ['/assets/catalogs/bags/backpack-skief-1.jpg', "/assets/catalogs/bags/backpack-skief-2.jpg"],
        methods: ['DTF', "Шелкография"],
        format: ['A6', 'A5', 'A4', 'A3'],
        description: ["Сумка для покупок APORT из натурального хлопка, прочная, выдерживает нагрузку 13-15 кг.", "Размер сумки 38 x42 см.", "Ручки - полиэстер, длина ручки 70 х 3 см."],
        category: 'Шопперы'
    },


  ];

  getBags(): Observable<Product[]> {
    return of(this.bags);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.bags.find((item) => item.id === id);
    return of(product);
  }
}
