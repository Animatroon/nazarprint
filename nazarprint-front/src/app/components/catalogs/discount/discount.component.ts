import { Component } from '@angular/core';
import { CatalogTemplateComponent } from '../../elements/catalog-template/catalog-template.component';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  standalone: true,
  imports: [CatalogTemplateComponent]
})
export class DiscountComponent {}
