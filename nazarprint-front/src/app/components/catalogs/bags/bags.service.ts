import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from '../../elements/product/interfaces/product.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BagsService {
  private apiUrl = `${environment.apiUrl}/catalogs/bags`;

  constructor(private http: HttpClient) {}

  getBags(): Observable<Product[]> {
    return this.http.get<{ success: boolean; data: Product[] }>(this.apiUrl).pipe(
      map(response => response.data)
    );
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.http.get<{ success: boolean; data: Product }>(`${this.apiUrl}/${id}`).pipe(
      map(response => response.data)
    );
  }
}
