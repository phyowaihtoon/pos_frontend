import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout-page',
  imports: [CommonModule],
  template: `
    <section class="page">
      <h1>Checkout</h1>
      <p>Checkout flow starts here. Next step is cart and payment components.</p>
    </section>
  `,
  styles: `.page { padding: 1rem; }`,
})
export class CheckoutPageComponent {}
