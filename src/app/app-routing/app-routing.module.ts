import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { SubscribeUserComponent } from '../ModuleUser/subscribe-user/subscribe-user.component';
import { LoginUserComponent } from '../ModuleUser/login-user/login-user.component';

const ROUTES: Routes = [
  {path : "subscribe",component: SubscribeUserComponent } ,
   {path : "login",component: LoginUserComponent }

] 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports :[RouterModule]
})
export class AppRoutingModule { }
