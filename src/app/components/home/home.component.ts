import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '*',
          opacity: 1,
          overflow: 'hidden'
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0,
          overflow: 'hidden'
        })
      ),
      transition('open <=> closed', [animate('300ms ease-in-out')])
    ])
  ]

})
export class HomeComponent {

  textArray = [
    'DTF Шелкография UV Лазерная гравировка Вышывка',
    'DTF Шелкография UV Лазерная гравировка Вышывка',
    'DTF Шелкография UV Лазерная гравировка Вышывка',
    'DTF Шелкография UV Лазерная гравировка Вышывка',
    'DTF Шелкография UV Лазерная гравировка Вышывка',
    'DTF Шелкография UV Лазерная гравировка Вышывка',
    'DTF Шелкография UV Лазерная гравировка Вышывка',
  ];

  

  instagramImages = [
    '/assets/home-instagram/instagram-1.png', '/assets/home-instagram/instagram-2.png', '/assets/home-instagram/instagram-3.png', '/assets/home-instagram/instagram-4.png', '/assets/home-instagram/instagram-5.png',
    '/assets/home-instagram/instagram-6.png', '/assets/home-instagram/instagram-1.png', '/assets/home-instagram/instagram-2.png'
  ];

  mainImage = this.instagramImages[0];

  showMainImage(index: number) {
    this.mainImage = this.instagramImages[index];
    const mainImageElement = document.querySelector('.main-image');
    if (mainImageElement) {
      mainImageElement.classList.remove('show');
      // Используем метод getBoundingClientRect() для принудительного перерисовывания
      const rect = mainImageElement.getBoundingClientRect();
      mainImageElement.classList.add('show');
    }
  }

  

  catalogs = [
    { name: 'Одежда', icon: '/assets/home-catalogs/catalog-icon-1.png', link: '/catalogs/clothes' },
    { name: 'Головные уборы', icon: '/assets/home-catalogs/catalog-icon-2.png', link: '/catalogs/headwears' },
    { name: 'Сумки', icon: '/assets/home-catalogs/catalog-icon-3.png', link: '/catalogs/bags' },
    { name: 'Посуда', icon: '/assets/home-catalogs/catalog-icon-4.png', link: '/catalogs/dishes' },
    { name: 'Для офиса', icon: '/assets/home-catalogs/catalog-icon-5.png', link: '/catalogs/office' },
    { name: 'Для дома', icon: '/assets/home-catalogs/catalog-icon-6.png', link: '/catalogs/for-home' },
    { name: 'Подарочные наборы', icon: '/assets/home-catalogs/catalog-icon-7.png', link: '/catalogs/gifts' },
    { name: 'Упаковка', icon: '/assets/home-catalogs/catalog-icon-8.png', link: '/catalogs/package' },
    { name: 'Для спорта', icon: '/assets/home-catalogs/catalog-icon-9.png', link: '/catalogs/for-sports' },
    { name: 'Спортивные формы', icon: '/assets/home-catalogs/catalog-icon-10.png', link: '/catalogs/sport-forms' },
    { name: 'Наградная продукция', icon: '/assets/home-catalogs/catalog-icon-11.png', link: '/catalogs/award-produts' },
    { name: 'Распродажа', icon: '/assets/home-catalogs/catalog-icon-12.png', link: '/catalogs/discount' },
    { name: 'Униформа', icon: '/assets/home-catalogs/catalog-icon-13.png', link: '/catalogs/uniforms' },
  ];

}
