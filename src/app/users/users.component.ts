import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  currentUser: User = {
      id: 0,
      name: '',
      email: ''
  };
  userList: User[] //= USERS;

  constructor() { }

  ngOnInit() {
    this.userList = USERS;
  }

  // handle click on users
  onSelect(user){
    this.currentUser = user;
  }

}
