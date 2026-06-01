import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customers-page',
  imports: [CommonModule],
  template: `
    <section class="page">
      <h1>Customers</h1>
      <p>Basic customer management module for Version 1.</p>
    </section>
  `,
  styles: `.page { padding: 1rem; }`,
})
export class CustomersPageComponent {}
