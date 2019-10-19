import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	productUrl: string = '/products';

	constructor(private db: AngularFireDatabase) { }

	create(product) {
		return this.db.list(this.productUrl).push(product);
	}

	get(productId) {
		return this.db.object(`${this.productUrl}/${productId}`);
	}

	getAll() {
		return this.db.list(this.productUrl);
	}
}
