import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[appPhoneMask]',
    standalone: true
})
export class PhoneMaskDirective {

    constructor(public ngControl: NgControl, public el: ElementRef) { }

    @HostListener('input', ['$event'])
    onInput(event: InputEvent): void {
        const input = event.target as HTMLInputElement;
        let value = input.value.replace(/\D/g, ''); // Удаляем всё кроме цифр

        // Если начинается с 7, 8 или +7 - обрабатываем
        if (value.startsWith('8')) {
            value = '7' + value.substring(1);
        } else if (value.startsWith('7')) {
            // уже ок
        } else {
            // Если цифра не 7 и не 8, просто добавляем 7 в начало (например пользователь нажал 9)
            // Либо можно игнорировать если пусто.
            // Но часто хотят чтобы если пусто и нажал цифру -> +7(цифра
            if (value.length > 0) {
                value = '7' + value;
            }
        }

        // Обрезаем до макс длины (11 цифр: 7XXXXXXXXXX)
        if (value.length > 11) {
            value = value.substring(0, 11);
        }

        // Формируем вывод +7(XXX)XXX-XX-XX
        let formattedValue = '';

        if (value.length > 0) {
            formattedValue = '+7';
        }
        if (value.length > 1) {
            formattedValue += '(' + value.substring(1, 4);
        }
        if (value.length >= 5) {
            formattedValue += ')' + value.substring(4, 7);
        }
        if (value.length >= 8) {
            formattedValue += '-' + value.substring(7, 9);
        }
        if (value.length >= 10) {
            formattedValue += '-' + value.substring(9, 11);
        }

        // Устанавливаем в контрол и в элемент
        // Важно: если используем ReactiveForms или ngModel, лучше обновлять через control
        if (this.ngControl && this.ngControl.control) {
            this.ngControl.control.setValue(formattedValue, { emitEvent: false });
        }
        input.value = formattedValue;
    }

    // Обработка Backspace чтобы не застревать на символах маски
    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent): void {
        // Можно добавить специфичную логику для backspace если нужно, 
        // но обычно input event достаточно пересчитывает всё строку.
        // Если пользователь стирает, new value будет короче, и маска перестроится.
    }
}
