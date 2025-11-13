import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss'],
    imports: [CommonModule],
    animations: [
        trigger('openClose', [
            state('open', style({ height: '*', opacity: 1, padding: '10px 0' })),
            state('closed', style({ height: '0', opacity: 0, padding: '0' })),
            transition('open <=> closed', animate('300ms ease-in-out')),
        ]),
    ]
})
export class FaqComponent implements OnInit {
  faqItems: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadFaq();
  }

  loadFaq(): void {
    this.http.get<{ success: boolean; data: any[] }>(`${environment.apiUrl}/faq`)
      .subscribe(response => {
        this.faqItems = response.data;
      });
  }

  toggleFaq(index: number): void {
    this.faqItems[index].open = !this.faqItems[index].open;
  }
}
