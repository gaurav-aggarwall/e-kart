import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductQuantityComponent } from './../product-quantity/product-quantity.component';

import { ProductFormComponent } from './product-form/product-form.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';

import { AdminRoutesModule } from './admin-routes.module';

@NgModule({
	declarations: [
		AdminOrdersComponent,
		AdminProductsComponent,
		ProductFormComponent,
		ProductCardComponent,
		ProductQuantityComponent
	],
	imports: [
		FormsModule,
		CommonModule,
		CustomFormsModule,
		AdminRoutesModule
	],
	exports: [
		ProductCardComponent
	]
})
export class AdminModule { }





