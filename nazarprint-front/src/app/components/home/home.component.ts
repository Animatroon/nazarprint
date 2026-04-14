import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { environment } from '../../../environments/environment';



import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '*',
        opacity: 1,
        overflow: 'hidden'
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden'
      })),
      transition('open <=> closed', [animate('300ms ease-in-out')])
    ])
  ],
  standalone: false
})
export class HomeComponent implements OnInit {

  textArray = [
    'DTF Шелкография UV Лазерная гравировка Вышывка',
    'DTF Шелкография UV Лазерная гравировка Вышывка',
    'DTF Шелкография UV Лазерная гравировка Вышывка',
    'DTF Шелкография UV Лазерная гравировка Вышывка',
    'DTF Шелкография UV Лазерная гравировка Вышывка',
    'DTF Шелкография UV Лазерная гравировка Вышывка',
    'DTF Шелкография UV Лазерная гравировка Вышывка',
  ];

  instagramImages: string[] = [];
  catalogs: any[] = [];
  catalogsLoading = true;

  mainImage = '';

  constructor(private http: HttpClient, private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSeoTags({
      title: 'Главная - Брендирование одежды',
      description: 'NazarPrint - печать на одежде, сувенирах, шелкография, DTF, вышивка в Алматы. Закажите брендирование для вашего бизнеса.',
      keywords: 'брендирование, печать на футболках, шелкография алматы, вышивка, DTF печать, сувенирная продукция'
    });
    this.loadCatalogs();
    this.loadInstagramImages();
  }

  loadCatalogs(): void {
    this.http.get<{ success: boolean; data: any[] }>(`${environment.apiUrl}/home/catalogs`)
      .subscribe(response => {
        this.catalogs = response.data;
        this.catalogsLoading = false;
      });
  }

  loadInstagramImages(): void {
    this.http.get<{ success: boolean; data: string[] }>(`${environment.apiUrl}/home/instagram`)
      .subscribe(response => {
        this.instagramImages = response.data;
        if (this.instagramImages.length > 0) {
          this.mainImage = this.instagramImages[0];
        }
      });
  }

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

}
