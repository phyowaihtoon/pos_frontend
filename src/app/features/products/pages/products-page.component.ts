import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { Product } from '../../../shared/models/product.model';
import { ProductsService } from '../services/products.service';
import { ProductsState } from '../state/products.state';

@Component({
  selector: 'app-products-page',
  imports: [CommonModule],
  template: `
    <section class="page">
      <h1>Products Inventory</h1>
      <p class="caption">Version 1 inventory source for checkout.</p>

      <ul class="product-list">
        <li *ngFor="let product of products">
          <strong>{{ product.name }}</strong>
          <span>SKU: {{ product.sku }}</span>
          <span>Price: {{ product.price | currency }}</span>
          <span>Stock: {{ product.stockQty }}</span>
        </li>
      </ul>
    </section>
  `,
  styles: `
    .page { padding: 1rem; }
    .caption { color: #475569; margin-bottom: 0.75rem; }
    .product-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 0.5rem; }
    .product-list li { border: 1px solid #cbd5e1; border-radius: 0.5rem; padding: 0.75rem; display: grid; gap: 0.125rem; }
  `,
})
export class ProductsPageComponent {
  private readonly productsService = inject(ProductsService);
  private readonly productsState = inject(ProductsState);

  products: Product[] = [];

  constructor() {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.productsState.isLoading.set(true);
    this.productsService.getProducts().subscribe((items) => {
      this.products = items;
      this.productsState.items.set(items);
      this.productsState.isLoading.set(false);
    });
  }
}
