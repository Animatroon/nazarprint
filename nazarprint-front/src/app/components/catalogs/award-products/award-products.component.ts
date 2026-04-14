import { Component } from '@angular/core';
import { CatalogTemplateComponent } from '../../elements/catalog-template/catalog-template.component';

@Component({
  selector: 'app-award-products',
  templateUrl: './award-products.component.html',
  standalone: true,
  imports: [CatalogTemplateComponent]
})
export class AwardProductsComponent {
  worksImages = [
    '/assets/catalogs/award-products/work-1.jpg',
    '/assets/catalogs/award-products/work-2.jpg',
    '/assets/catalogs/award-products/work-3.jpg',
    '/assets/catalogs/award-products/work-4.jpg',
  ];
}
