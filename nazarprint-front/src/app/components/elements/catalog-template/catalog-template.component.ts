import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../../../shared/services/catalog.service';
import { Product } from '../product/interfaces/product.interface';
import { ProductBlockComponent } from '../product/product-block/product-block.component';
import { FormosComponent } from '../formos/formos.component';
import { RequestForCalcComponent } from '../request-for-calc/request-for-calc.component';
import { InstagramSectionComponent } from '../instagram-section/instagram-section.component';
import { FaqComponent } from '../faq/faq.component';
import { ConsultationComponent } from '../consultation/consultation.component';
import { MapsComponent } from '../maps/maps.component';
import { MethodsComponent } from '../methods/methods.component';

export interface CatalogMethod {
  title: string;
  description: string;
  image: string;
  link?: string;
}

@Component({
  selector: 'app-catalog-template',
  templateUrl: './catalog-template.component.html',
  styleUrls: ['./catalog-template.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ProductBlockComponent,
    FormosComponent,
    RequestForCalcComponent,
    InstagramSectionComponent,
    FaqComponent,
    ConsultationComponent,
    MapsComponent,
    MethodsComponent
  ]
})
export class CatalogTemplateComponent implements OnInit {
  @Input() categorySlug!: string;
  @Input() pageTitle = 'Выберите товар для брендирования';
  @Input() introTitle?: string;
  @Input() introBg?: string;
  @Input() infoText?: string;
  @Input() methods?: CatalogMethod[];
  @Input() worksImages?: string[];

  products: Product[] = [];
  isLoading = true;

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.catalogService.getProductsByCategory(this.categorySlug).subscribe((data: Product[]) => {
      this.products = data;
      this.isLoading = false;
    });
  }
}
