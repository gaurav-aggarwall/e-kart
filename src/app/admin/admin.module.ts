import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';

import { AdminRoutesModule } from './admin-routes.module';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';

@NgModule({
	declarations: [
		AdminOrdersComponent,
		AdminProductsComponent,
		ProductFormComponent,
	],
	imports: [
		AdminRoutesModule,
		SharedModule
	],
	providers: [
		AdminAuthGuardService
	]
})
export class AdminModule { }





