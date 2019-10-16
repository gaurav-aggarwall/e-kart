import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
	navigationSubscription: any;

	constructor(private auth: AuthService, private userService: UserService, router: Router) {
		this.navigationSubscription = this.auth.user$.subscribe(user => {
			if (user) {
				this.userService.save(user)
				
				let returnUrl = localStorage.getItem('returnUrl');
				router.navigateByUrl(returnUrl);
			}
		});
	}

	ngOnDestroy() {
		this.navigationSubscription.unsubscribe();
	}
}
