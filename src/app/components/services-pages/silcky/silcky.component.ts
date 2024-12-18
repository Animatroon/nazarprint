import { Component } from '@angular/core';

@Component({
  selector: 'app-silcky',
  templateUrl: './silcky.component.html',
  styleUrl: './silcky.component.scss'
})
export class SilckyComponent {

  advantages = [
    'Высокое качество изображений',
    'Универсальность материалов',
    'Долговечность и стойкость',
    'Эффективность в производстве',
    'Устойчивость к температурным и природным воздействиям.',
    'Снижение себестоимости при заказе больших тиражей'
  ];
}
