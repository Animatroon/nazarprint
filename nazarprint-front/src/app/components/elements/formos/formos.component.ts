import { Component } from '@angular/core';
import { PhoneMaskDirective } from '../../../shared/directives/phone-mask.directive';

@Component({
  selector: 'app-formos',
  templateUrl: './formos.component.html',
  styleUrls: ['./formos.component.scss'],
  standalone: true,
  imports: [PhoneMaskDirective]
})
export class FormosComponent {

}
