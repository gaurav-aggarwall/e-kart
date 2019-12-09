import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './shopping/components/products/products.component';
import { LoginComponent } from './core/components/login/login.component';

const routes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'login', component: LoginComponent },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
	],	
  	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }