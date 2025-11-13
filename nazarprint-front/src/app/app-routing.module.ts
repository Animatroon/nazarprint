import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ClothesComponent } from './components/catalogs/clothes/clothes.component';
import { DTFComponent } from './components/services-pages/dtf/dtf.component';
import { UvComponent } from './components/services-pages/uv/uv.component';
import { SilckyComponent } from './components/services-pages/silcky/silcky.component';
import { FancyworkComponent } from './components/services-pages/fancywork/fancywork.component';
import { LaserComponent } from './components/services-pages/laser/laser.component';
import { PricesComponent } from './components/prices/prices.component';
import { ProductDetailComponent } from './components/elements/product/product-detail/product-detail.component';
import { HeadwearsComponent } from './components/catalogs/headwears/headwears.component';
import { ForHomeComponent } from './components/catalogs/for-home/for-home.component';
import { BagsComponent } from './components/catalogs/bags/bags.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dtf', component: DTFComponent },
  { path: 'uv', component: UvComponent },
  { path: 'silcky', component: SilckyComponent },
  { path: 'fancywork', component: FancyworkComponent },
  { path: 'laser', component: LaserComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'catalogs/clothes', component: ClothesComponent },
  { path: 'catalogs/bags', component: BagsComponent },
  { path: 'catalogs/for-home', component: ForHomeComponent },
  { path: 'catalogs/headwears', component: HeadwearsComponent },
  { path: 'catalogs/clothes/:id', component: ProductDetailComponent }


];


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
