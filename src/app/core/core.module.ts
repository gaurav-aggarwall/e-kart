import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
		NavbarComponent,
    LoginComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([]),
  ],
  exports: [
    NavbarComponent,
    LoginComponent
  ]
})
export class CoreModule { }
