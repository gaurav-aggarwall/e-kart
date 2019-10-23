import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/take';

import { Product } from './models/product';
import { ShoppingCart } from './models/shopping-cart';

@Injectable({
	providedIn: 'root'
})
export class ShoppingCartService {
	private readonly SHOPPING_CART_URL: string = '/shopping-carts';

	constructor(private db: AngularFireDatabase) { }

	private create() {
		return this.db.list(this.SHOPPING_CART_URL).push({
			dateCreated: new Date().getTime()
		});
	}

	private async getOrCreateCartId(): Promise<string> {
		let cartId = localStorage.getItem('cartId');

		if(cartId) return cartId;

		let result = await this.create();
		localStorage.setItem('cartId', result.key);
		return result.key;
	}
	
	async getCart(): Promise<FirebaseObjectObservable<ShoppingCart>> {
		let cartId = await this.getOrCreateCartId();
		return this.db.object(`${this.SHOPPING_CART_URL}/${cartId}`);
	}

	private getItem(cartId: string, productId: string) {
		return this.db.object(`${this.SHOPPING_CART_URL}/${cartId}/items/${productId}`);
	}

	private async updateItemQuantity(product: Product, change: number) {
		let cartId = await this.getOrCreateCartId();
		let item$ = this.getItem(cartId, product.$key);
		item$.take(1).subscribe((item: any) => item$.update({ product: product, quantity: (item.quantity || 0) + change }));
	}

	async addToCart(product: Product) {
		this.updateItemQuantity(product, 1);
	}
	
	async removeFromCart(product: Product) {
		this.updateItemQuantity(product, -1);
	}
}
