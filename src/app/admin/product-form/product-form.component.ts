import { Product } from 'src/app/models/product';
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
	id;
	product = {
		title: '',
		price: 0,
		category: '',
		imageUrl: '',
	};

	constructor(categoriesService: CategoriesService, private productService: ProductService, private router:Router, private route: ActivatedRoute) {
		this.categories$ = categoriesService.getAll();
		this.id = this.route.snapshot.paramMap.get('id');
		if(this.id) this.productService.get(this.id).take(1).subscribe((p: Product) => this.product = p);
	}

	save(product) {
		if(this.id) {
			this.productService.update(this.id, product);
		} else {
			this.productService.create(product);
		}
		this.router.navigate(['/admin/products']);
	}

	delete() {
		if(! confirm('Are you sure you want to delete this product ?')) return; 
		this.productService.delete(this.id);
		this.router.navigate(['/admin/products']);
		
	}
}
