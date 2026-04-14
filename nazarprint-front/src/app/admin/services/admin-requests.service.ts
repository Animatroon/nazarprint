import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AdminAuthService } from './admin-auth.service';

@Injectable({ providedIn: 'root' })
export class AdminRequestsService {
  private base = `${environment.apiUrl}/admin/requests`;

  constructor(private http: HttpClient, private auth: AdminAuthService) {}

  private headers(): HttpHeaders {
    return new HttpHeaders({ Authorization: `Bearer ${this.auth.getToken()}` });
  }

  getCallbacks(params: { status?: string; page?: number } = {}): Observable<any> {
    let p = new HttpParams();
    if (params.status) p = p.set('status', params.status);
    if (params.page) p = p.set('page', params.page);
    return this.http.get(`${this.base}/callbacks`, { headers: this.headers(), params: p });
  }

  updateCallback(id: number, status: string): Observable<any> {
    return this.http.patch(`${this.base}/callbacks/${id}`, { status }, { headers: this.headers() });
  }

  getCalculations(params: { status?: string; page?: number } = {}): Observable<any> {
    let p = new HttpParams();
    if (params.status) p = p.set('status', params.status);
    if (params.page) p = p.set('page', params.page);
    return this.http.get(`${this.base}/calculations`, { headers: this.headers(), params: p });
  }

  updateCalculation(id: number, status: string): Observable<any> {
    return this.http.patch(`${this.base}/calculations/${id}`, { status }, { headers: this.headers() });
  }

  getStats(): Observable<any> {
    return this.http.get(`${this.base}/stats`, { headers: this.headers() });
  }
}
