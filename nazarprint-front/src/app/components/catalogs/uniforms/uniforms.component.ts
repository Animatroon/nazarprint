import { Component } from '@angular/core';
import { CatalogTemplateComponent } from '../../elements/catalog-template/catalog-template.component';

@Component({
  selector: 'app-uniforms',
  templateUrl: './uniforms.component.html',
  standalone: true,
  imports: [CatalogTemplateComponent]
})
export class UniformsComponent {
  worksImages = [
    '/assets/catalogs/uniforms/work-1.jpg',
    '/assets/catalogs/uniforms/work-2.jpg',
    '/assets/catalogs/uniforms/work-3.jpg',
    '/assets/catalogs/uniforms/work-4.jpg',
  ];
}
