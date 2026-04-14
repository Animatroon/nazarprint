import { Component } from '@angular/core';
import { CatalogTemplateComponent } from '../../elements/catalog-template/catalog-template.component';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  standalone: true,
  imports: [CatalogTemplateComponent]
})
export class PackageComponent {
  worksImages = [
    '/assets/catalogs/package/work-1.jpg',
    '/assets/catalogs/package/work-2.jpg',
    '/assets/catalogs/package/work-3.jpg',
    '/assets/catalogs/package/work-4.jpg',
  ];
}
