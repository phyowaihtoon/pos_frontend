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
          <a routerLink="/login" routerLinkActive="active">Login</a>
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
    .topbar { display: flex; align-items: center; justify-content: space-between; padding: 0.95rem 1.2rem; background: #0f172a; color: #e2e8f0; }
    .topbar h1 { margin: 0; font-size: 1.125rem; letter-spacing: 0.02em; }
    .topbar nav { display: flex; gap: 0.95rem; flex-wrap: wrap; }
    .topbar a { color: #e2e8f0; text-decoration: none; border-bottom: 2px solid transparent; padding-bottom: 0.15rem; font-size: 0.92rem; }
    .topbar a.active { border-bottom-color: #38bdf8; }
    .content { width: 100%; margin: 0 auto; }
  `,
})
export class App {}
