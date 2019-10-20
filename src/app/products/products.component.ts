import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Product } from '../models/product';
import { ProductService } from './../product.service';
import { CategoriesService } from './../categories.service';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent {
	products: Product[] = [];
	filteredProducts: Product[] = [];
	categories$: Observable<any>;
	category: string;
	
	constructor(productService: ProductService, categoriesService: CategoriesService, route: ActivatedRoute) {
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

		this.categories$ = categoriesService.getAll();
	}
}
