import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'checkout' },
	{
		path: 'checkout',
		loadComponent: () =>
			import('./features/checkout/pages/checkout-page.component').then(
				(m) => m.CheckoutPageComponent,
			),
	},
	{
		path: 'products',
		loadComponent: () =>
			import('./features/products/pages/products-page.component').then(
				(m) => m.ProductsPageComponent,
			),
	},
	{
		path: 'customers',
		loadComponent: () =>
			import('./features/customers/pages/customers-page.component').then(
				(m) => m.CustomersPageComponent,
			),
	},
	{
		path: 'orders',
		loadComponent: () =>
			import('./features/orders/pages/orders-page.component').then(
				(m) => m.OrdersPageComponent,
			),
	},
	{
		path: 'refunds',
		loadComponent: () =>
			import('./features/refunds/pages/refunds-page.component').then(
				(m) => m.RefundsPageComponent,
			),
	},
	{ path: '**', redirectTo: 'checkout' },
];
