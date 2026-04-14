import { Component, OnInit, OnDestroy, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject, debounceTime, distinctUntilChanged, switchMap, of } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  query = '';
  results: any[] = [];
  loading = false;
  open = false;

  private input$ = new Subject<string>();

  constructor(private http: HttpClient, private elRef: ElementRef) {}

  ngOnInit(): void {
    this.input$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(q => {
        if (q.trim().length < 2) {
          this.results = [];
          this.loading = false;
          return of(null);
        }
        this.loading = true;
        return this.http.get<any>(`${environment.apiUrl}/search?q=${encodeURIComponent(q)}&limit=8`);
      })
    ).subscribe({
      next: (res) => {
        this.loading = false;
        if (res) {
          this.results = res.data;
          this.open = true;
        }
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  onInput(): void {
    this.input$.next(this.query);
    if (this.query.trim().length < 2) {
      this.open = false;
      this.results = [];
    }
  }

  onFocus(): void {
    if (this.results.length > 0) this.open = true;
  }

  close(): void {
    this.open = false;
  }

  selectResult(): void {
    this.query = '';
    this.results = [];
    this.open = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent): void {
    if (!this.elRef.nativeElement.contains(e.target)) {
      this.open = false;
    }
  }

  ngOnDestroy(): void {
    this.input$.complete();
  }
}
