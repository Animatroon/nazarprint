import { Component } from '@angular/core';
import { CatalogTemplateComponent } from '../../elements/catalog-template/catalog-template.component';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  standalone: true,
  imports: [CatalogTemplateComponent]
})
export class GiftsComponent {
  worksImages = [
    '/assets/catalogs/gifts/work-1.jpg',
    '/assets/catalogs/gifts/work-2.jpg',
    '/assets/catalogs/gifts/work-3.jpg',
    '/assets/catalogs/gifts/work-4.jpg',
  ];
}
