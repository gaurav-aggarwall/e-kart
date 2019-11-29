import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../models/product';
import { ProductService } from './../product.service';
import { ShoppingCartService } from './../shopping-cart.service';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy{
	products: Product[] = [];
	filteredProducts: Product[] = [];
	category: string;
	cart: any;
	subscription: Subscription;

	constructor(productService: ProductService, route: ActivatedRoute, private shoppingCartService: ShoppingCartService) {
		productService.getAll().subscribe(products => {
			this.products = products;

			route.queryParamMap.subscribe(params => {
				this.category = params.get('category');
				
				if(this.category) {
					this.filteredProducts = this.products.filter(p => p.category === this.category);
				} else {
					this.filteredProducts = this.products;
				}
			});
		});
	}

	async ngOnInit() {
		let cartFromService = await this.shoppingCartService.getCart();
		this.subscription = cartFromService.subscribe(cart => this.cart = cart);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
