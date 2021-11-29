import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserSubscribe } from '../models/usersubscribe';

@Component({
  selector: 'app-subscribe-user',
  templateUrl: './subscribe-user.component.html',
  styleUrls: ['./subscribe-user.component.css']
})
export class SubscribeUserComponent implements OnInit {
  
  myForm: FormGroup;

  usersubscribe : UserSubscribe [];
    
  newUserSubscribe  = new UserSubscribe();


  constructor() {
    this.usersubscribe = [
         {firstname:"raed",lastname:"jaidi",username:"raedjaidi",
         birthdate: new Date("07/11/1996"),email:"raed.jaidi@esprit.tn",
         password:"12345azer",confpass:"12345azer",roles:"ADMIN"},

         {firstname:"mohamed",lastname:"jaidi",username:"mohamedjaidi",
         birthdate: new Date("07/11/2000"),email:"mohamed.jaidi@esprit.tn",
         password:"12345azer",confpass:"12345azer",roles:"USER"},
    ];
   }

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
