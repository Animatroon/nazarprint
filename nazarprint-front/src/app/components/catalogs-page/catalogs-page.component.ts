import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatalogsPageService, CatalogCategory } from './catalogs-page.service';
import { ConsultationComponent } from '../elements/consultation/consultation.component';
import { MapsComponent } from '../elements/maps/maps.component';

@Component({
  selector: 'app-catalogs-page',
  templateUrl: './catalogs-page.component.html',
  styleUrls: ['./catalogs-page.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, ConsultationComponent, MapsComponent]
})
export class CatalogsPageComponent implements OnInit {
  categories: CatalogCategory[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private catalogsService: CatalogsPageService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.catalogsService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Не удалось загрузить категории';
        this.isLoading = false;
        console.error('Ошибка загрузки категорий:', err);
      }
    });
  }
}
