import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('openClose', [
      state('open', style({ height: '*', opacity: 1, padding: '10px 0' })),
      state('closed', style({ height: '0', opacity: 0, padding: '0' })),
      transition('open <=> closed', animate('300ms ease-in-out')),
    ]),
  ],
})
export class FaqComponent {
  faqItems = [
    {
      question: 'Как сделать заказ?',
      answer: `Для заказа напишите нам в WhatsApp / Instagram / Telegram или позвоните по номеру +7 707 314 3013.<br>
        Укажите: изделие, место расположения принта/надписи, количество, цвет и размер.`,
      open: false
    },
    {
      question: 'Доставка КазПочта',
      answer: 'Мы отправляем заказы по всему Казахстану через КазПочту. Стоимость и сроки уточняйте у менеджера.',
      open: false
    },
    {
      question: 'Доставка CDEK',
      answer: 'Отправка осуществляется курьерской службой CDEK. Возможна доставка до двери или пункта выдачи заказов.',
      open: false
    },
    {
      question: 'Основные форматы нанесения',
      answer: 'Для печати подходят следующие форматы: PNG, JPEG, PDF. Рекомендуем использовать изображения высокого качества.',
      open: false
    },
    {
      question: 'Как правильно ухаживать за изделиями с принтом?',
      answer: 'Стирать при температуре не выше 30°C, вывернув изделие наизнанку. Не использовать отбеливатели и агрессивные моющие средства.',
      open: false
    },
    {
      question: 'Как правильно ухаживать за кружками с печатью?',
      answer: 'Ручная мойка предпочтительнее. Использовать мягкие моющие средства. Можно использовать в микроволновой печи.',
      open: false
    },
    {
      question: 'Печать номеров и фамилии на футбольных формах',
      answer: 'Мы предлагаем персонализацию футбольной формы с нанесением номеров и фамилий, используя долговечные методы печати.',
      open: false
    },
    {
      question: 'Какие файлы подходят для печати?',
      answer: 'Лучшие результаты достигаются с файлами в форматах PNG, PDF или TIFF с высоким разрешением (300 dpi).',
      open: false
    },
    {
      question: 'Отличаются ли цвета на экране от итогового результата?',
      answer: 'Да, небольшие различия возможны из-за цветового профиля экрана и используемых материалов. Мы используем CMYK для точности.',
      open: false
    },
    {
      question: 'Какой цветовой профиль лучше подходит для печати?',
      answer: 'Рекомендуемый профиль для печати — CMYK, который обеспечивает точную передачу цветов.',
      open: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqItems[index].open = !this.faqItems[index].open;
  }
}
