import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRequestsService } from '../services/admin-requests.service';

const STATUS_LABELS: Record<string, string> = {
  NEW: 'Новая',
  IN_PROGRESS: 'В работе',
  COMPLETED: 'Завершена',
  CANCELLED: 'Отменена'
};

@Component({
  selector: 'app-admin-requests',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-requests.component.html',
  styleUrls: ['./admin-requests.component.scss']
})
export class AdminRequestsComponent implements OnInit {
  activeTab: 'callbacks' | 'calculations' = 'callbacks';
  statusFilter = '';

  callbacks: any[] = [];
  calculations: any[] = [];
  stats: any = null;

  callbacksTotal = 0;
  calculationsTotal = 0;
  loading = false;

  statuses = [
    { value: '', label: 'Все' },
    { value: 'NEW', label: 'Новые' },
    { value: 'IN_PROGRESS', label: 'В работе' },
    { value: 'COMPLETED', label: 'Завершены' },
    { value: 'CANCELLED', label: 'Отменены' }
  ];

  readonly statusLabels = STATUS_LABELS;

  constructor(private requestsService: AdminRequestsService) {}

  ngOnInit(): void {
    this.loadStats();
    this.loadCallbacks();
    this.loadCalculations();
  }

  loadStats(): void {
    this.requestsService.getStats().subscribe({
      next: res => this.stats = res.data
    });
  }

  loadCallbacks(): void {
    this.loading = true;
    this.requestsService.getCallbacks({ status: this.statusFilter || undefined }).subscribe({
      next: res => {
        this.callbacks = res.data;
        this.callbacksTotal = res.total;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  loadCalculations(): void {
    this.loading = true;
    this.requestsService.getCalculations({ status: this.statusFilter || undefined }).subscribe({
      next: res => {
        this.calculations = res.data;
        this.calculationsTotal = res.total;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  onFilterChange(): void {
    if (this.activeTab === 'callbacks') this.loadCallbacks();
    else this.loadCalculations();
  }

  switchTab(tab: 'callbacks' | 'calculations'): void {
    this.activeTab = tab;
    this.statusFilter = '';
    this.onFilterChange();
  }

  updateCallbackStatus(id: number, status: string): void {
    this.requestsService.updateCallback(id, status).subscribe({
      next: () => { this.loadCallbacks(); this.loadStats(); }
    });
  }

  updateCalculationStatus(id: number, status: string): void {
    this.requestsService.updateCalculation(id, status).subscribe({
      next: () => { this.loadCalculations(); this.loadStats(); }
    });
  }

  statusLabel(s: string): string {
    return STATUS_LABELS[s] ?? s;
  }
}
