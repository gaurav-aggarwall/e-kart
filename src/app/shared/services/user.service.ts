import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AppUser } from 'shared/models/app-user';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	constructor(private db: AngularFireDatabase) { }

	save(user: firebase.User) {
		this.db.object('/users/' + user.uid).update({
			name: user.displayName,
			email: user.email
		});
	}

	get(uid: String): FirebaseObjectObservable<AppUser> {
		return this.db.object('/users/' + uid);
	}
}
