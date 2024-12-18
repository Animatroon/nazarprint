import { Component, OnInit } from '@angular/core';
import { Product } from '../../elements/product/interfaces/product.interface';
import { BagsService } from './bags.service';
import { ProductBlockComponent } from '../../elements/product/product-block/product-block.component';
import { CommonModule } from '@angular/common';
import { MethodsComponent } from '../../elements/methods/methods.component';
import { InstagramSectionComponent } from '../../elements/instagram-section/instagram-section.component';
import { RequestForCalcComponent } from '../../elements/request-for-calc/request-for-calc.component';
import { FaqComponent } from '../../elements/faq/faq.component';
import { ConsultationComponent } from '../../elements/consultation/consultation.component';
import { MapsComponent } from '../../elements/maps/maps.component';
import { FormosComponent } from '../../elements/formos/formos.component';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrl: './bags.component.scss',
  standalone: true,
  imports: [ProductBlockComponent, CommonModule, MethodsComponent, RequestForCalcComponent, FormosComponent, InstagramSectionComponent, FaqComponent, ConsultationComponent, MapsComponent]
})
export class BagsComponent implements OnInit {
  products: Product[] = [];

  constructor(private bagsService: BagsService) {}

  ngOnInit(): void {
    this.bagsService.getBags().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
}
