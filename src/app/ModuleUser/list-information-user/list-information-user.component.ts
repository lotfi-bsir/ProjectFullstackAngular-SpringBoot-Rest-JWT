import { Component, OnInit } from '@angular/core';
import { UserSubscribe } from '../models/usersubscribe';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-list-information-user',
  templateUrl: './list-information-user.component.html',
  styleUrls: ['./list-information-user.component.css']
})
export class ListInformationUserComponent implements OnInit {

users: UserSubscribe[];
  
  constructor(private userService: UserService) {
  this.users=  userService.listUser();
 }

  ngOnInit(): void {
    

  }

}
