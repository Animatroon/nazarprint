import { Component } from '@angular/core';
import { Product } from '../../elements/product/interfaces/product.interface';
import { HeadwearsService } from './headwears.service';
import { ProductBlockComponent } from '../../elements/product/product-block/product-block.component';
import { CommonModule } from '@angular/common';
import { MethodsComponent } from '../../elements/methods/methods.component';
import { RequestForCalcComponent } from '../../elements/request-for-calc/request-for-calc.component';
import { InstagramSectionComponent } from '../../elements/instagram-section/instagram-section.component';
import { FaqComponent } from '../../elements/faq/faq.component';
import { ConsultationComponent } from '../../elements/consultation/consultation.component';
import { MapsComponent } from '../../elements/maps/maps.component';

@Component({
  selector: 'app-headwears',
  templateUrl: './headwears.component.html',
  styleUrl: './headwears.component.scss',
  standalone: true,
  imports: [ProductBlockComponent, CommonModule, MethodsComponent, RequestForCalcComponent, InstagramSectionComponent, FaqComponent, ConsultationComponent, MapsComponent]
  
})
export class HeadwearsComponent {
  product: Product[] = [];
  
  constructor(private headwearsSercive: HeadwearsService ) {}

  ngOnInit(): void {
    this.product = this.headwearsSercive.getProduct();
  }
}
