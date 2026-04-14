import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AdminAuthService } from '../services/admin-auth.service';
import { AdminRequestsService } from '../services/admin-requests.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  sidebarOpen = false;
  newCallbacks = 0;
  newCalculations = 0;

  constructor(
    private auth: AdminAuthService,
    private requestsService: AdminRequestsService
  ) {
    this.loadStats();
  }

  loadStats(): void {
    this.requestsService.getStats().subscribe({
      next: res => {
        this.newCallbacks = res.data.callbacksNew;
        this.newCalculations = res.data.calculationsNew;
      }
    });
  }

  get totalNew(): number {
    return this.newCallbacks + this.newCalculations;
  }

  logout(): void {
    this.auth.logout();
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }
}
