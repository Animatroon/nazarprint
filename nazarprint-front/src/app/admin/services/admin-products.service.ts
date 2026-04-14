import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AdminAuthService } from './admin-auth.service';

@Injectable({ providedIn: 'root' })
export class AdminProductsService {
  private base = `${environment.apiUrl}/admin/products`;

  constructor(private http: HttpClient, private auth: AdminAuthService) {}

  private headers(): HttpHeaders {
    return new HttpHeaders({ Authorization: `Bearer ${this.auth.getToken()}` });
  }

  getProducts(params: { page?: number; limit?: number; categoryId?: number; search?: string } = {}): Observable<any> {
    let p = new HttpParams();
    if (params.page) p = p.set('page', params.page);
    if (params.limit) p = p.set('limit', params.limit);
    if (params.categoryId) p = p.set('categoryId', params.categoryId);
    if (params.search) p = p.set('search', params.search);
    return this.http.get(this.base, { headers: this.headers(), params: p });
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.base}/${id}`, { headers: this.headers() });
  }

  createProduct(data: any): Observable<any> {
    return this.http.post(this.base, data, { headers: this.headers() });
  }

  updateProduct(id: number, data: any): Observable<any> {
    return this.http.put(`${this.base}/${id}`, data, { headers: this.headers() });
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.base}/${id}`, { headers: this.headers() });
  }
}
