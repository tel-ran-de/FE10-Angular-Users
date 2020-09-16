import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../../service/user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.css']
})
export class FilterContainerComponent implements OnInit {

  users: Observable<User>;
  user: Observable<User>;

  constructor(private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit(): void {
    const filter = [];
    this.route.params.subscribe(params => {
      if (params.id) {
        this.user = this.userService.getUserById(params.id);
      } else {
        Object.keys(params).forEach((key) =>
          filter.push({ key, value: params[key]})
        );
        this.users = this.userService.getFilteredUsers(filter);
      }
    });
  }

}
