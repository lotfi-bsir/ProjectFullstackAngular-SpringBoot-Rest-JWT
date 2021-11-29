import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { SubscribeUserComponent } from '../ModuleUser/subscribe-user/subscribe-user.component';
import { LoginUserComponent } from '../ModuleUser/login-user/login-user.component';
import { DashbordForAdminComponent } from '../ModuleUser/dashbord-for-admin/dashbord-for-admin.component';
import { ListInformationUserComponent } from '../ModuleUser/list-information-user/list-information-user.component';
import { ForbiddenComponent } from '../ModuleUser/security/forbidden/forbidden.component';
import { ControlbyguardGuard } from '../ModuleUser/security/controlbyguard.guard';

const ROUTES: Routes = [
  {path : "subscribe",component: SubscribeUserComponent } ,
   {path : "login",component: LoginUserComponent },
   {path : "dashbord",component: DashbordForAdminComponent, canActivate:[ControlbyguardGuard]},
   {path : "listuser",component: ListInformationUserComponent },
   {path:  'forbidden', component: ForbiddenComponent},

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
