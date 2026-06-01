import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orders-page',
  imports: [CommonModule],
  template: `
    <section class="page">
      <h1>Orders</h1>
      <p>Basic order history module for Version 1.</p>
    </section>
  `,
  styles: `.page { padding: 1rem; }`,
})
export class OrdersPageComponent {}
