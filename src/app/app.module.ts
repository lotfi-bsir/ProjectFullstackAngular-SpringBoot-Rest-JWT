import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlideComponent } from './slide/slide.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SubscribeUserComponent } from './ModuleUser/subscribe-user/subscribe-user.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginUserComponent } from './ModuleUser/login-user/login-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashbordForAdminComponent } from './ModuleUser/dashbord-for-admin/dashbord-for-admin.component';
import { ListInformationUserComponent } from './ModuleUser/list-information-user/list-information-user.component';
import { ForbiddenComponent } from './ModuleUser/security/forbidden/forbidden.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideComponent,
    HomeComponent,
    FooterComponent,
    SubscribeUserComponent,
    LoginUserComponent,
    DashbordForAdminComponent,
    ListInformationUserComponent,
    ForbiddenComponent,
   

     
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
