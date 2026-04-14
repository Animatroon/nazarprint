import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = `${environment.apiUrl}/catalogs`;

  constructor(private http: HttpClient) { }

  getProductById(id: number, category: string = 'clothes'): Observable<any> {
    return this.http.get<{ success: boolean; data: any }>(`${this.apiUrl}/${category}/${id}`)
      .pipe(
        map(response => {
          const p = response.data;
          // Adapter to match UI expectations
          return {
            ...p,
            sizes: p.format || [],
            colors: p.color ? p.color.map((c: string) => ({ name: c, hex: this.getHex(c) })) : [],
            printZones: [{
              zone: 'Стандарт',
              methods: p.methods || [],
              maxSizes: { 'One Size': 'A3', 'S': 'A4', 'M': 'A3', 'L': 'A3' } // Dummy config
            }]
          };
        })
      );
  }

  private getHex(colorName: string): string {
    const colors: { [key: string]: string } = {
      'white': '#ffffff', 'black': '#000000', 'red': '#ff0000', 'blue': '#0000ff',
      'green': '#008000', 'gray': '#808080', 'yellow': '#ffff00', 'pink': '#ffc0cb',
      'navy': '#000080', 'brown': '#a52a2a'
    };
    return colors[colorName.toLowerCase()] || '#cccccc';
  }
}
