import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductCardComponent } from '../product-card/product-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-block',
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.scss'],
  standalone: true,
  imports: [CommonModule, ProductCardComponent, FormsModule],
})
export class ProductBlockComponent implements OnInit {
  @Input() products: Product[] = []; // Массив продуктов

  filteredProducts: Product[] = [];
  displayedProducts: Product[] = [];
  categories: string[] = [];
  selectedCategories: string[] = [];
  priceRange: number = 15000;
  searchTerm: string = '';
  sortOption: string = 'default';
  itemsPerPage: number = 12;
  currentPage: number = 1;
  showLoadMore: boolean = false;

  constructor() {}

  ngOnInit() {
    if (this.products.length > 0) {
      this.filteredProducts = [...this.products]; // Создаем копию массива
      this.categories = Array.from(new Set(this.products.map((product) => product.category))); // Уникальные категории
      this.applyFilters(); // Применяем фильтры
    }
  }

  applyFilters() {
    this.filteredProducts = this.products
      .filter((product) => this.filterByCategory(product))
      .filter((product) => this.filterByPrice(product))
      .filter((product) => this.filterBySearch(product));

    this.sortProducts();
    this.updateDisplayedProducts();
  }

  filterByCategory(product: Product): boolean {
    if (this.selectedCategories.length === 0) return true;
    return this.selectedCategories.includes(product.category);
  }

  filterByPrice(product: Product): boolean {
    return product.price <= this.priceRange;
  }

  filterBySearch(product: Product): boolean {
    return product.name.toLowerCase().includes(this.searchTerm.toLowerCase());
  }

  sortProducts() {
    switch (this.sortOption) {
      case 'priceAsc':
        this.filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        this.filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'nameAsc':
        this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name, 'ru'));
        break;
      case 'nameDesc':
        this.filteredProducts.sort((a, b) => b.name.localeCompare(a.name, 'ru'));
        break;
      case 'newest':
        this.filteredProducts.sort((a, b) => b.id - a.id);
        break;
      case 'oldest':
        this.filteredProducts.sort((a, b) => a.id - b.id);
        break;
    }
  }

  updateDisplayedProducts() {
    this.displayedProducts = this.filteredProducts.slice(0, this.currentPage * this.itemsPerPage);
    this.showLoadMore = this.filteredProducts.length > this.displayedProducts.length;
  }

  loadMore() {
    this.currentPage++;
    this.updateDisplayedProducts();
  }

  onCategoryChange(category: string) {
    if (this.selectedCategories.includes(category)) {
      this.selectedCategories = this.selectedCategories.filter((c) => c !== category);
    } else {
      this.selectedCategories.push(category);
    }
    this.applyFilters();
  }

  onSortChange() {
    this.sortProducts();
    this.updateDisplayedProducts();
  }
}
