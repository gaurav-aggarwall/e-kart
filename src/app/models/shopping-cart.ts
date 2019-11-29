import { Product } from 'src/app/models/product';
import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {    
    items: ShoppingCartItem[] = [];

    constructor(public itemsMap: { [key: string]: ShoppingCartItem } ) {
        for(let productId in itemsMap) {
            let item = itemsMap[productId];
            this.items.push(new ShoppingCartItem(item.product, item.quantity));
        }   
    }

    getQuantity(product: Product) {
		let item = this.itemsMap[product.$key];
		return item ? item.quantity : 0;
	}

    get totalPrice() {
        let sum = 0;
        for (let productId in this.items) {
            sum += this.items[productId].totalPrice;
        }
        return sum;
    }

    get totalItemsCount() {
        let count = 0;
        for (let productId in this.items) {
            count += this.items[productId].quantity;
        }
        return count;
    }
}