import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-refunds-page',
  imports: [CommonModule],
  template: `
    <section class="page">
      <h1>Refunds</h1>
      <p>Basic refund flow module for Version 1.</p>
    </section>
  `,
  styles: `.page { padding: 1rem; }`,
})
export class RefundsPageComponent {}
