import { Component, OnInit } from '@angular/core';
import { UserSubscribe } from '../models/usersubscribe';


@Component({
  selector: 'app-list-information-user',
  templateUrl: './list-information-user.component.html',
  styleUrls: ['./list-information-user.component.css']
})
export class ListInformationUserComponent implements OnInit {


  usersubscribe : UserSubscribe [];
  constructor() {
 }

  ngOnInit(): void {
    
    this.usersubscribe = [
      {firstname:"raed",lastname:"jaidi",username:"raedjaidi",
      birthdate: new Date("07/11/1996"),email:"raed.jaidi@esprit.tn",
      password:"12345azer",confpass:"12345azer",roles:"ADMIN"},

      {firstname:"mohamed",lastname:"jaidi",username:"mohamedjaidi",
      birthdate: new Date("07/11/2000"),email:"mohamed.jaidi@esprit.tn",
      password:"12345azer",confpass:"12345azer",roles:"USER"},
 ];
  }

}
