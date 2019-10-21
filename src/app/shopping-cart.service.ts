import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/take';

import { Product } from './models/product';

@Injectable({
	providedIn: 'root'
})
export class ShoppingCartService {
	readonly SHOPPING_CART_URL: string = '/shopping-carts';

	constructor(private db: AngularFireDatabase) { }

	private create() {
		return this.db.list(this.SHOPPING_CART_URL).push({
			dateCreated: new Date().getTime()
		});
	}

	private async getOrCreateCartId() {
		let cartId = localStorage.getItem('cartId');

		if(cartId) return cartId;

		let result = await this.create();
		localStorage.setItem('cartId', result.key);
		return result.key;
	}
	
	private getItem(cartId: string, productId: string) {
		return this.db.object(`${this.SHOPPING_CART_URL}/${cartId}/items/${productId}`);
	}

	async addToCart(product: Product) {
		let cartId = await this.getOrCreateCartId();
		let item$ = this.getItem(cartId, product.$key);
		item$.take(1).subscribe((item: any) => item$.update({ product: product, quantity: (item.quantity || 0) + 1 }));
	}
}
