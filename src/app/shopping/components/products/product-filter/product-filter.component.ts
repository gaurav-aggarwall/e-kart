import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { CategoriesService } from 'shared/services/categories.service';

@Component({
	selector: 'app-product-filter',
	templateUrl: './product-filter.component.html',
	styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {
	categories$: Observable<any>;
	@Input('category') category: string;

	constructor(categoriesService: CategoriesService) {
		this.categories$ = categoriesService.getAll();
	}
}
