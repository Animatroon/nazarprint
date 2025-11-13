import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DTFComponent } from './dtf/dtf.component';
import { UvComponent } from './uv/uv.component';
import { SilckyComponent } from './silcky/silcky.component';
import { FancyworkComponent } from './fancywork/fancywork.component';
import { LaserComponent } from './laser/laser.component';
import { FormosComponent } from '../elements/formos/formos.component';

const routes: Routes = [
  { path: 'dtf', component: DTFComponent },
  { path: 'uv', component: UvComponent },
  { path: 'silcky', component: SilckyComponent },
  { path: 'fancywork', component: FancyworkComponent },
  { path: 'laser', component: LaserComponent }
];

@NgModule({
  declarations: [DTFComponent, UvComponent, SilckyComponent, FancyworkComponent, LaserComponent],
  imports: [CommonModule, RouterModule, FormosComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServicesPageModule {}
