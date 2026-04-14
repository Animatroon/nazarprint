import { Component, OnInit } from '@angular/core';
import { Product } from '../../elements/product/interfaces/product.interface';
import { CatalogService } from '../../../shared/services/catalog.service';
import { ProductBlockComponent } from '../../elements/product/product-block/product-block.component';
import { CommonModule } from '@angular/common';
import { FormosComponent } from '../../elements/formos/formos.component';
import { RequestForCalcComponent } from '../../elements/request-for-calc/request-for-calc.component';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrl: './bags.component.scss',
  standalone: true,
  imports: [ProductBlockComponent, CommonModule, FormosComponent, RequestForCalcComponent]
})
export class BagsComponent implements OnInit {
  products: Product[] = [];

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.catalogService.getProductsByCategory('bags').subscribe((data: Product[]) => {
      this.products = data;
    });
  }
}
