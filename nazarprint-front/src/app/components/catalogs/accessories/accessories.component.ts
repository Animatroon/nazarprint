import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../../../shared/services/catalog.service';
import { ProductBlockComponent } from '../../elements/product/product-block/product-block.component';
import { RequestForCalcComponent } from '../../elements/request-for-calc/request-for-calc.component';
import { Product } from '../../elements/product/interfaces/product.interface';

@Component({
    selector: 'app-accessories',
    templateUrl: './accessories.component.html',
    styleUrls: ['./accessories.component.scss'],
    standalone: true,
    imports: [CommonModule, ProductBlockComponent, RequestForCalcComponent]
})
export class AccessoriesComponent implements OnInit {
    products: Product[] = [];

    constructor(private catalogService: CatalogService) { }

    ngOnInit() {
        this.catalogService.getProductsByCategory('accessories').subscribe(data => this.products = data);
    }

    scrollToForm() {
        const el = document.querySelector('app-request-for-calc');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
