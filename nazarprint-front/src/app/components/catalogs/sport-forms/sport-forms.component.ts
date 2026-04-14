import { Component } from '@angular/core';
import { CatalogTemplateComponent } from '../../elements/catalog-template/catalog-template.component';

@Component({
  selector: 'app-sport-forms',
  templateUrl: './sport-forms.component.html',
  standalone: true,
  imports: [CatalogTemplateComponent]
})
export class SportFormsComponent {
  worksImages = [
    '/assets/catalogs/sport-forms/work-1.jpg',
    '/assets/catalogs/sport-forms/work-2.jpg',
    '/assets/catalogs/sport-forms/work-3.jpg',
    '/assets/catalogs/sport-forms/work-4.jpg',
  ];
}
