import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.css']
})
export class UsersContainerComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      users => this.users = users
    );
  }

}
