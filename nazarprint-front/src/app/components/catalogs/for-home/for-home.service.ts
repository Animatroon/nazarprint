import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForHomeService {
  private apiUrl = `${environment.apiUrl}/catalogs/for-home`;

  constructor(private http: HttpClient) {}

  getProduct(): Observable<any[]> {
    return this.http.get<{ success: boolean; data: any[] }>(this.apiUrl).pipe(
      map(response => response.data)
    );
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<{ success: boolean; data: any }>(`${this.apiUrl}/${id}`).pipe(
      map(response => response.data)
    );
  }
}
