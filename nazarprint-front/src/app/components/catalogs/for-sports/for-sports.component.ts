import { Component } from '@angular/core';
import { CatalogTemplateComponent } from '../../elements/catalog-template/catalog-template.component';

@Component({
  selector: 'app-for-sports',
  templateUrl: './for-sports.component.html',
  standalone: true,
  imports: [CatalogTemplateComponent]
})
export class ForSportsComponent {
  worksImages = [
    '/assets/catalogs/for-sports/work-1.jpg',
    '/assets/catalogs/for-sports/work-2.jpg',
    '/assets/catalogs/for-sports/work-3.jpg',
    '/assets/catalogs/for-sports/work-4.jpg',
  ];
}
