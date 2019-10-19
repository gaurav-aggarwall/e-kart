import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
	navigationSubscription: Subscription;

	constructor(private auth: AuthService, private userService: UserService, router: Router) {
		this.navigationSubscription = this.auth.user$.subscribe(user => {
			if(!user) return;

			this.userService.save(user);
			
			let returnUrl = localStorage.getItem('returnUrl');	
			if(!returnUrl) return;
			
			localStorage.removeItem('returnUrl');
			router.navigateByUrl(returnUrl);
		});
	}

	ngOnDestroy() {
		this.navigationSubscription.unsubscribe();
	}
}
