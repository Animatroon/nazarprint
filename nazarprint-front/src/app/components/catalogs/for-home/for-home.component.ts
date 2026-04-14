import { Component, OnInit } from '@angular/core';
import { ProductBlockComponent } from '../../elements/product/product-block/product-block.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../elements/product/interfaces/product.interface';
import { CatalogService } from '../../../shared/services/catalog.service';
import { InstagramSectionComponent } from '../../elements/instagram-section/instagram-section.component';
import { ConsultationComponent } from '../../elements/consultation/consultation.component';
import { MapsComponent } from '../../elements/maps/maps.component';
import { FormosComponent } from '../../elements/formos/formos.component';
import { RequestForCalcComponent } from '../../elements/request-for-calc/request-for-calc.component';
import { FaqComponent } from '../../elements/faq/faq.component';

@Component({
  selector: 'app-for-home',
  templateUrl: './for-home.component.html',
  styleUrls: ['./for-home.component.scss'],
  standalone: true,
  imports: [ProductBlockComponent, CommonModule, RequestForCalcComponent, InstagramSectionComponent, FaqComponent, ConsultationComponent, MapsComponent, FormosComponent]
})
export class ForHomeComponent implements OnInit {
  product: Product[] = [];

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.catalogService.getProductsByCategory('for-home').subscribe(data => {
      this.product = data;
    });
  }
}
