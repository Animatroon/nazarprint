import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ClothesService } from './clothes.service';
import { Product } from '../../elements/product/interfaces/product.interface';
import { ProductBlockComponent } from '../../elements/product/product-block/product-block.component';
import { CommonModule } from '@angular/common';
import { MethodsComponent } from '../../elements/methods/methods.component';
import { RequestForCalcComponent } from '../../elements/request-for-calc/request-for-calc.component';
import { InstagramSectionComponent } from '../../elements/instagram-section/instagram-section.component';
import { FaqComponent } from '../../elements/faq/faq.component';
import { ConsultationComponent } from '../../elements/consultation/consultation.component';
import { MapsComponent } from '../../elements/maps/maps.component';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss'],
  standalone: true,
  imports: [ProductBlockComponent, CommonModule, MethodsComponent, RequestForCalcComponent, InstagramSectionComponent, FaqComponent, ConsultationComponent, MapsComponent]
})
export class ClothesComponent implements OnInit {
  products: Product[] = [];

  constructor(private clothesService: ClothesService) {}

  ngOnInit(): void {
    this.clothesService.getClothes().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
}
