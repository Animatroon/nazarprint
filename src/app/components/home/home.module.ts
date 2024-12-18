import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapsComponent } from '../elements/maps/maps.component';
import { RouterLink } from '@angular/router';

import { DTFComponent } from '../services-pages/dtf/dtf.component';
import { UvComponent } from '../services-pages/uv/uv.component';
import { SilckyComponent } from '../services-pages/silcky/silcky.component';
import { LaserComponent } from '../services-pages/laser/laser.component';
import { FancyworkComponent } from '../services-pages/fancywork/fancywork.component';
import { RequestForCalcComponent } from '../elements/request-for-calc/request-for-calc.component';
import { InstagramSectionComponent } from '../elements/instagram-section/instagram-section.component';
import { FaqComponent } from '../elements/faq/faq.component';
import { ConsultationComponent } from '../elements/consultation/consultation.component';



@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MapsComponent,
    RouterLink,
    RequestForCalcComponent,
    InstagramSectionComponent,
    FaqComponent,
    ConsultationComponent
  ],
  exports: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
