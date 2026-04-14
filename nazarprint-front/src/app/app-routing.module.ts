import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/login/admin-login.component';
import { AdminLayoutComponent } from './admin/layout/admin-layout.component';
import { AdminProductsComponent } from './admin/products/admin-products.component';
import { AdminRequestsComponent } from './admin/requests/admin-requests.component';
import { authGuard } from './admin/guards/auth.guard';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CatalogsPageComponent } from './components/catalogs-page/catalogs-page.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { ClothesComponent } from './components/catalogs/clothes/clothes.component';
import { DTFComponent } from './components/services-pages/dtf/dtf.component';
import { UvComponent } from './components/services-pages/uv/uv.component';
import { SilkyComponent } from './components/services-pages/silky/silky.component';
import { FancyworkComponent } from './components/services-pages/fancywork/fancywork.component';
import { LaserComponent } from './components/services-pages/laser/laser.component';
import { PricesComponent } from './components/prices/prices.component';
import { ProductDetailComponent } from './components/elements/product/product-detail/product-detail.component';
import { HeadwearsComponent } from './components/catalogs/headwears/headwears.component';
import { ForHomeComponent } from './components/catalogs/for-home/for-home.component';
import { BagsComponent } from './components/catalogs/bags/bags.component';
import { OfficeComponent } from './components/catalogs/office/office.component';
import { SportComponent } from './components/catalogs/sport/sport.component';
import { SouvenirsComponent } from './components/catalogs/souvenirs/souvenirs.component';
import { AccessoriesComponent } from './components/catalogs/accessories/accessories.component';
import { DishesComponent } from './components/catalogs/dishes/dishes.component';
import { GiftsComponent } from './components/catalogs/gifts/gifts.component';
import { PackageComponent } from './components/catalogs/package/package.component';
import { ForSportsComponent } from './components/catalogs/for-sports/for-sports.component';
import { SportFormsComponent } from './components/catalogs/sport-forms/sport-forms.component';
import { AwardProductsComponent } from './components/catalogs/award-products/award-products.component';
import { DiscountComponent } from './components/catalogs/discount/discount.component';
import { UniformsComponent } from './components/catalogs/uniforms/uniforms.component';
import { DeliveryComponent } from './components/pages/delivery/delivery.component';
import { WarrantyComponent } from './components/pages/warranty/warranty.component';
import { HelpComponent } from './components/pages/help/help.component';
import { PrivacyComponent } from './components/pages/privacy/privacy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'services/dtf', component: DTFComponent },
  { path: 'services/uv', component: UvComponent },
  { path: 'services/silky', component: SilkyComponent },
  { path: 'services/fancywork', component: FancyworkComponent },
  { path: 'services/laser', component: LaserComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'catalogs', component: CatalogsPageComponent },
  { path: 'catalogs/clothes', component: ClothesComponent },
  { path: 'catalogs/bags', component: BagsComponent },
  { path: 'catalogs/for-home', component: ForHomeComponent },
  { path: 'catalogs/headwears', component: HeadwearsComponent },
  { path: 'catalogs/office', component: OfficeComponent },
  { path: 'catalogs/sport', component: SportComponent },
  { path: 'catalogs/souvenirs', component: SouvenirsComponent },
  { path: 'catalogs/accessories', component: AccessoriesComponent },
  { path: 'catalogs/dishes', component: DishesComponent },
  { path: 'catalogs/gifts', component: GiftsComponent },
  { path: 'catalogs/package', component: PackageComponent },
  { path: 'catalogs/for-sports', component: ForSportsComponent },
  { path: 'catalogs/sport-forms', component: SportFormsComponent },
  { path: 'catalogs/award-products', component: AwardProductsComponent },
  { path: 'catalogs/discount', component: DiscountComponent },
  { path: 'catalogs/uniforms', component: UniformsComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'warranty', component: WarrantyComponent },
  { path: 'help', component: HelpComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'catalogs/clothes/:id', component: ProductDetailComponent },
  { path: 'catalogs/:category/:id', component: ProductDetailComponent },
  { path: 'admin/login', component: AdminLoginComponent },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: AdminProductsComponent },
      { path: 'requests', component: AdminRequestsComponent },
    ]
  }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
