import { Component } from '@angular/core';
import { CatalogTemplateComponent } from '../../elements/catalog-template/catalog-template.component';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  standalone: true,
  imports: [CatalogTemplateComponent]
})
export class DishesComponent {
  worksImages = [
    '/assets/catalogs/dishes/work-1.jpg',
    '/assets/catalogs/dishes/work-2.jpg',
    '/assets/catalogs/dishes/work-3.jpg',
    '/assets/catalogs/dishes/work-4.jpg',
  ];
}
