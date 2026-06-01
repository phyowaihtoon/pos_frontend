import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <main class="app-shell">
      <header class="topbar">
        <h1>Point Of Sales</h1>
        <nav>
          <a routerLink="/checkout" routerLinkActive="active">Checkout</a>
          <a routerLink="/products" routerLinkActive="active">Products</a>
          <a routerLink="/customers" routerLinkActive="active">Customers</a>
          <a routerLink="/orders" routerLinkActive="active">Orders</a>
          <a routerLink="/refunds" routerLinkActive="active">Refunds</a>
        </nav>
      </header>

      <section class="content">
        <router-outlet />
      </section>
    </main>
  `,
  styles: `
    .app-shell { min-height: 100vh; background: #f8fafc; color: #0f172a; }
    .topbar { display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: #0f172a; color: #e2e8f0; }
    .topbar h1 { margin: 0; font-size: 1.125rem; }
    .topbar nav { display: flex; gap: 1rem; flex-wrap: wrap; }
    .topbar a { color: #e2e8f0; text-decoration: none; border-bottom: 2px solid transparent; padding-bottom: 0.15rem; }
    .topbar a.active { border-bottom-color: #38bdf8; }
    .content { max-width: 1100px; margin: 0 auto; }
  `,
})
export class App {}
