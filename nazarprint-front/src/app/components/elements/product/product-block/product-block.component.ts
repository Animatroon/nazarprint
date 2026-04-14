import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductCardComponent } from '../product-card/product-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-block',
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.scss'],
  imports: [CommonModule, ProductCardComponent, FormsModule]
})
export class ProductBlockComponent implements OnInit, OnChanges {
  @Input() products: Product[] = [];
  @Input() categorySlug: string = 'clothes';

  filteredProducts: Product[] = [];
  displayedProducts: Product[] = [];
  categories: string[] = [];
  sizes: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'One Size'];
  genders: { value: string, label: string }[] = [
    { value: 'male', label: 'Мужское' },
    { value: 'female', label: 'Женское' },
    { value: 'unisex', label: 'Унисекс' }
  ];

  selectedCategories: string[] = [];
  selectedSizes: string[] = [];
  selectedGenders: string[] = [];
  priceRange: number = 50000;
  maxPrice: number = 50000;
  searchTerm: string = '';
  sortOption: string = 'default';
  itemsPerPage: number = 12;
  currentPage: number = 1;
  showLoadMore: boolean = false;

  expandedSections: { [key: string]: boolean } = {
    price: true,
    category: true,
    gender: false,
    sizes: false
  };

  isMobileFiltersOpen: boolean = false;

  ngOnInit() {
    this.initializeFilters();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['products'] && this.products.length > 0) {
      this.initializeFilters();
    }
  }

  initializeFilters() {
    if (this.products.length > 0) {
      this.filteredProducts = [...this.products];
      this.categories = Array.from(new Set(this.products.map((p) => p.category)));
      this.maxPrice = Math.max(...this.products.map(p => p.price));
      this.priceRange = this.maxPrice;
      this.applyFilters();
    }
  }

  toggleSection(section: string) {
    this.expandedSections[section] = !this.expandedSections[section];
  }

  toggleMobileFilters() {
    this.isMobileFiltersOpen = !this.isMobileFiltersOpen;
    document.body.style.overflow = this.isMobileFiltersOpen ? 'hidden' : '';
  }

  applyFilters() {
    this.filteredProducts = this.products
      .filter((p) => this.filterByCategory(p))
      .filter((p) => this.filterByPrice(p))
      .filter((p) => this.filterBySearch(p))
      .filter((p) => this.filterByGender(p))
      .filter((p) => this.filterBySizes(p));

    this.sortProducts();
    this.currentPage = 1;
    this.updateDisplayedProducts();

    if (this.isMobileFiltersOpen) {
      this.toggleMobileFilters();
    }
  }

  resetFilters() {
    this.selectedCategories = [];
    this.selectedSizes = [];
    this.selectedGenders = [];
    this.priceRange = this.maxPrice;
    this.searchTerm = '';
    this.applyFilters();
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

  filterByGender(product: Product): boolean {
    if (this.selectedGenders.length === 0) return true;
    return product.gender ? this.selectedGenders.includes(product.gender) : true;
  }

  filterBySizes(product: Product): boolean {
    if (this.selectedSizes.length === 0) return true;
    return product.sizes ? product.sizes.some(s => this.selectedSizes.includes(s)) : true;
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
    const idx = this.selectedCategories.indexOf(category);
    if (idx > -1) {
      this.selectedCategories.splice(idx, 1);
    } else {
      this.selectedCategories.push(category);
    }
  }

  onSizeChange(size: string) {
    const idx = this.selectedSizes.indexOf(size);
    if (idx > -1) {
      this.selectedSizes.splice(idx, 1);
    } else {
      this.selectedSizes.push(size);
    }
  }

  onGenderChange(gender: string) {
    const idx = this.selectedGenders.indexOf(gender);
    if (idx > -1) {
      this.selectedGenders.splice(idx, 1);
    } else {
      this.selectedGenders.push(gender);
    }
  }

  onSortChange() {
    this.sortProducts();
    this.updateDisplayedProducts();
  }

  get activeFiltersCount(): number {
    return this.selectedCategories.length + this.selectedSizes.length + this.selectedGenders.length +
      (this.priceRange < this.maxPrice ? 1 : 0);
  }
}
