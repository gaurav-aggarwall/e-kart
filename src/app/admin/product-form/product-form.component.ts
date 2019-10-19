import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

import { CategoriesService } from './../../categories.service';
import { ProductService } from './../../product.service';

@Component({
	selector: 'app-product-form',
	templateUrl: './product-form.component.html',
	styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
	categories$;
	product = {};

	constructor(categoriesService: CategoriesService, private productService: ProductService, private router:Router, private route: ActivatedRoute) {
		this.categories$ = categoriesService.getCategories();
		let id = this.route.snapshot.paramMap.get('id');
	
		if(id) this.productService.get(id).take(1).subscribe(p => this.product = p);
	}

	save(product) {
		this.productService.create(product);
		this.router.navigate(['/admin/products']);
	}
}
