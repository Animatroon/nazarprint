import { Observable, of } from 'rxjs';
import { name } from './../../../../../node_modules/@leichtgewicht/ip-codec/types/index.d';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForHomeService {

  constructor() { }
  private forhome = [
    {
      "id": 1,
      "name": 'Зонт складной автомат DERBY',
      'type': 'Зонт UC',
      'images': ['/assets/catalogs/for-home/umbrella-auto-derby.jpg'],
      'price': 6750,
      'color': ['black'],
      'methods': ['DTF'],
      'format': ['A6', 'A5', 'A4'],
      'category': 'Зонты'
    },
    {
      'id': 2,
      'name': 'Часы',
      'type': 'Часы UC',
      "images": ['/assets/catalogs/for-home/clock-1.jpg', '/assets/catalogs/for-home/clock-1.jpg'],
      'price': 9500,
      'description': ['Диаметр: 29,5 см.', "Оптовая печать просчитывается индивидуально"],
      'category': "Часы"
    },
    {
      'id': 3,
      'name': 'Настенные часы MONTRE',
      'type': 'Часы SWG',
      'color': ['black', 'red', 'blue'],
      "images": ['/assets/catalogs/for-home/clock-montre-1.jpg', '/assets/catalogs/for-home/clock-montre-2.jpg'],
      'price': 9500,
      'description': ['Материал: пластик', "Настенные часы в пластиковом корпусе синего цвета замечательно дополнят интерьер в классическом стиле.", 'Часы разборные, на циферблат можно нанести поздравление и подарить близким людям, а также нанести логотип своей компании.', 'Оптовая печать просчитывается индивидуально.'],
      'category': "Часы"
    },
    {
      'id': 4,
      'name': 'Бутылка для воды KROSS',
      'type': 'Часы SWG',
      'color': ['white', 'pink', 'blue'],
      "images": ['/assets/catalogs/for-home/bottle-kross-1.jpg', '/assets/catalogs/for-home/bottle-kross-2.jpg'],
      'price': 3000,
      'description': ['Прекрасно подойдет для активного отдыха на природе и занятий спортом.', "Цилиндрическая форма бутылки удобна для круговой печати логотипа.", 'Герметическая откидывающая крышка не дает пролиться воде.', 'Крышка оснащена удобной кнопкой для открывания имеющая фиксатор'],
      'category': "Бутылки"
    },
    {
      'id': 5,
      'name': 'Бутылка для воды SAWESTA',
      'type': 'Бутылка SWG',
      'color': ['white', 'red', 'blue'],
      "images": ['/assets/catalogs/for-home/bottle-sawesta-1.jpg', "/assets/catalogs/for-home/bottle-sawesta-2.jpg"],
      'price': 3000,
      'description': ['Бутылка для воды из переработанного пластика — идеальный вариант для летней прогулки, похода в спортзал или ежедневного использования.', 'Удобная съемная петелька-ремешок позволяет повесить «SAWESTA» на запястье, плоская крышка из нержавеющей стали плотно прилегает к корпусу, а также играет роль дополнительного поля для нанесения.'],
      'category': "Бутылки"
    },
    {
      "id": 6,
      "name": 'Зонт-трость WIND',
      'type': 'Зонт-трость UC',
      'images': ['/assets/catalogs/for-home/umbrella-auto-derby.jpg'],
      'price': 5600,
      'color': ['black', 'green', 'red'],
      'methods': ['DTF'],
      'format': ['A6', 'A5', 'A4'],
      'category': 'Зонты'
    },
  ]

  getProductById(id: number): Observable<any> {
    const product = this.forhome.find((item) => item.id === id);
    return of(product);
  }

  getProduct() {
    return this.forhome;
  }
}
