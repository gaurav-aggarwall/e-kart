import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductService } from 'shared/services/product.service';
import { Product } from 'shared/models/product';

@Component({
	selector: 'app-admin-products',
	templateUrl: './admin-products.component.html',
	styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy{
	products: Product[];
	filteredProducts: Product[];
	subscription: Subscription;

	constructor(productService: ProductService) { 
		this.subscription = productService.getAll().subscribe(products => this.filteredProducts = this.products = products);
	}

	filter(query: string) {
		if (!query) {
			return this.filteredProducts = this.products;
		} 
		this.filteredProducts = this.products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
