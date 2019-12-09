import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from "shared/services/auth.service";
import { AppUser } from 'shared/models/app-user';

import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
	selector: 'navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
	appUser: AppUser;
	cart$: Observable<ShoppingCart>;

	constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) { }

	async ngOnInit() {
		this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
		
		this.cart$ = await this.shoppingCartService.getCart();
	}

	logout() {
		this.auth.logout();
	}

}
