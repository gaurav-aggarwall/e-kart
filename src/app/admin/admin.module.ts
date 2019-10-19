import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
// import { DataTableModule } from 'angular5-data-table';

import { ProductFormComponent } from './product-form/product-form.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';

import { AdminRoutesModule } from './admin-routes.module';

@NgModule({
	declarations: [
		AdminOrdersComponent,
		AdminProductsComponent,
		ProductFormComponent
	],
	imports: [
		FormsModule,
		CommonModule,
		CustomFormsModule,
		// DataTableModule.forRoot(),
		AdminRoutesModule
	]
})
export class AdminModule { }





