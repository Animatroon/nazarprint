import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-consultation',
    imports: [CommonModule],
    templateUrl: './consultation.component.html',
    styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent {
  submitForm(event: Event) {
    event.preventDefault();
    alert('Заявка отправлена! Менеджер свяжется с вами.');
  }
}
