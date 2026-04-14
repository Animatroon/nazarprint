import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormosComponent } from '../../elements/formos/formos.component';

@Component({
    selector: 'app-silky',
    templateUrl: './silky.component.html',
    styleUrl: './silky.component.scss',
    standalone: true,
    imports: [CommonModule, FormosComponent]
})
export class SilkyComponent {
  advantages = [
    'Высокое качество изображений',
    'Универсальность материалов',
    'Долговечность и стойкость',
    'Эффективность в производстве',
    'Устойчивость к температурным и природным воздействиям',
    'Снижение себестоимости при заказе больших тиражей'
  ];
}
