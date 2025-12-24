import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Product } from '../../components/elements/product/interfaces/product.interface';

@Injectable({
    providedIn: 'root'
})
export class CatalogService {
    private apiUrl = `${environment.apiUrl}/catalogs`;

    constructor(private http: HttpClient) { }

    getProductsByCategory(category: string): Observable<Product[]> {
        return this.http.get<{ success: boolean; data: Product[] }>(`${this.apiUrl}/${category}`)
            .pipe(map(response => response.data));
    }
}
