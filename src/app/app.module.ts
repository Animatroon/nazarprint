import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { HeaderComponent } from './components/elements/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/elements/footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MapsComponent } from './components/elements/maps/maps.component';
// import { AboutComponent } from './components/about/about.component';
// import { ClothesComponent } from './components/catalogs/clothes/clothes.component';
// import { HeadwearsComponent } from './components/catalogs/headwears/headwears.component';
import { FormsModule } from '@angular/forms';
import { PricesComponent } from './components/prices/prices.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaqComponent } from './components/elements/faq/faq.component';
// import { FormosComponent } from './components/elements/formos/formos.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    // HeadwearsComponent,
    // AboutComponent,
    FooterComponent,
    PricesComponent,


    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HeaderComponent,
    RouterOutlet,
    MapsComponent,
    FaqComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule { }
