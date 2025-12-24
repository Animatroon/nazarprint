import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { PhoneMaskDirective } from '../../../shared/directives/phone-mask.directive';

@Component({
  selector: 'app-consultation',
  imports: [CommonModule, FormsModule, PhoneMaskDirective],
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent {
  name = '';
  phone = '';
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  constructor(private http: HttpClient) { }

  submitForm(event: Event) {
    event.preventDefault();

    if (!this.name || !this.phone) {
      this.submitError = 'Заполните все поля';
      return;
    }

    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.submitError = '';

    this.http.post(`${environment.apiUrl}/requests/callback`, {
      name: this.name,
      phone: this.phone
    }).subscribe({
      next: () => {
        this.submitSuccess = true;
        this.isSubmitting = false;
        this.name = '';
        this.phone = '';
        setTimeout(() => this.submitSuccess = false, 5000);
      },
      error: (err) => {
        this.submitError = 'Не удалось отправить заявку. Попробуйте позже.';
        this.isSubmitting = false;
        console.error('Ошибка отправки:', err);
      }
    });
  }
}
