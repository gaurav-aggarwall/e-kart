import { Component } from '@angular/core';
import { ProductService } from './../../product.service';

@Component({
	selector: 'app-admin-products',
	templateUrl: './admin-products.component.html',
	styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {
	products$;

	constructor(productService: ProductService) { 
		this.products$ = productService.getAll();
	}
}
