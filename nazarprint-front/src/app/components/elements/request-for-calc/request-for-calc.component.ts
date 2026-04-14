import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { PhoneMaskDirective } from '../../../shared/directives/phone-mask.directive';

@Component({
  selector: 'app-request-for-calc',
  imports: [CommonModule, ReactiveFormsModule, PhoneMaskDirective],
  templateUrl: './request-for-calc.component.html',
  styleUrls: ['./request-for-calc.component.scss']
})
export class RequestForCalcComponent {
  form: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      // Валидатор проверяет полное соответствие формату +7(XXX)XXX-XX-XX, который генерирует маска
      phone: ['', [Validators.required, Validators.minLength(16)]],
      details: [''],
      quantity: [1, [Validators.min(1)]],
      contactMethod: this.fb.group({
        phoneCall: [false],
        whatsapp: [false],
        telegram: [false],
      }),
    });
  }

  decreaseQuantity() {
    const current = this.form.get('quantity')?.value;
    if (current > 1) this.form.get('quantity')?.setValue(current - 1);
  }

  increaseQuantity() {
    const current = this.form.get('quantity')?.value;
    this.form.get('quantity')?.setValue(current + 1);
  }

  onSubmit() {
    if (this.form.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitError = '';

      this.http.post(`${environment.apiUrl}/requests/calculation`, this.form.value)
        .subscribe({
          next: () => {
            this.submitSuccess = true;
            this.isSubmitting = false;
            this.form.reset({
              quantity: 1,
              contactMethod: {
                phoneCall: false,
                whatsapp: false,
                telegram: false
              }
            });
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
}
