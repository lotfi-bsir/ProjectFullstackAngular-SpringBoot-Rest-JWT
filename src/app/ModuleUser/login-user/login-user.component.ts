import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLogin } from '../models/userlogin';




@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  user = new UserLogin();
  myForm: FormGroup;

  constructor() { }
    
  ngOnInit(): void { 
    this.myForm = new FormGroup({
      'username': new FormControl('',Validators.required),
      'password': new FormControl('',Validators.required),
      
    })
  
  }
 onLoggedin(){
   console.log(this.user)
 }

}
