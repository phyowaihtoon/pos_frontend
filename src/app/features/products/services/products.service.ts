import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from '../../../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly products: Product[] = [
    { id: '1', sku: 'SKU-001', name: 'Coffee 3 in 1', price: 1.2, stockQty: 120 },
    { id: '2', sku: 'SKU-002', name: 'Instant Noodle', price: 0.75, stockQty: 85 },
    { id: '3', sku: 'SKU-003', name: 'Mineral Water', price: 0.4, stockQty: 200 },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
