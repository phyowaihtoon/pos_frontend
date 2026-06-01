import { Injectable, signal } from '@angular/core';

import { Product } from '../../../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsState {
  readonly items = signal<Product[]>([]);
  readonly isLoading = signal(false);
}
