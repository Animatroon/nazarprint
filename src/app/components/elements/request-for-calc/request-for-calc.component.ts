import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-request-for-calc',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './request-for-calc.component.html',
    styleUrls: ['./request-for-calc.component.scss']
})
export class RequestForCalcComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
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
    if (this.form.valid) {
      console.log('Форма отправлена', this.form.value);
      alert('Заявка успешно отправлена!');
      this.form.reset({ quantity: 1 });
    } else {
      alert('Пожалуйста, заполните обязательные поля.');
    }
  }
}
