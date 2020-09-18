import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.css']
})
export class FilterContainerComponent implements OnInit {

  users: User[];
  user: User;

  constructor(private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit(): void {
    const filter = [];
    this.route.params.subscribe(params => {
      if (params.id) {
        this.userService.getUserById(params.id).subscribe(
          (user: User) => {
            this.user = user;
          }
        );
      } else {
        Object.keys(params).forEach((key) =>
          filter.push({ key, value: params[key]})
        );
        this.userService.getFilteredUsers(filter).subscribe(users =>
          this.users = users
        );
      }
    });
  }
}
