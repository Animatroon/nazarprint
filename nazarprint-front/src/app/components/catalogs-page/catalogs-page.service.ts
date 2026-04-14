import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface CatalogCategory {
  id: number;
  name: string;
  icon: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class CatalogsPageService {
  private apiUrl = `${environment.apiUrl}/home/catalogs`;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<CatalogCategory[]> {
    return this.http.get<{ success: boolean; data: CatalogCategory[] }>(this.apiUrl).pipe(
      map(response => response.data)
    );
  }
}
