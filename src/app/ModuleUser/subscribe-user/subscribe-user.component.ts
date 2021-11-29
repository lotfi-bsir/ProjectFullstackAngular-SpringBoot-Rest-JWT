import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserSubscribe } from '../models/usersubscribe';


@Component({
  selector: 'app-subscribe-user',
  templateUrl: './subscribe-user.component.html',
  styleUrls: ['./subscribe-user.component.css']
})
export class SubscribeUserComponent implements OnInit {
  
  myForm: FormGroup;
  
  
  newUserSubscribe  = new UserSubscribe();


  constructor() { }

  ngOnInit(): void {


    this.myForm = new FormGroup({
      'firstname': new FormControl('',Validators.required),
      'lastname': new FormControl('',Validators.required),
      'username': new FormControl('',Validators.required),
      'birthday': new FormControl('',Validators.required),
      'email': new FormControl('',Validators.required),
      'password': new FormControl('',Validators.required),
      'confpass': new FormControl('',Validators.required),
    })
  }

addUser(){
  console.log(this.newUserSubscribe);
}

}
