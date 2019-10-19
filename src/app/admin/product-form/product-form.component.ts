import { Component } from '@angular/core';

import { CategoriesService } from './../../categories.service';
import { ProductService } from './../../product.service';

@Component({
	selector: 'app-product-form',
	templateUrl: './product-form.component.html',
	styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
	categories$;

	constructor(categoriesService: CategoriesService, private productService: ProductService) {
		this.categories$ = categoriesService.getCategories();
	}

	save(product) {
		this.productService.create(product);
	}
}
