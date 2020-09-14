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

  filterObject: User = {
    firstName: null,
    lastName: null,
    age: null,
    city: null
  };

  constructor(private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      Object.keys(params).forEach((key) =>
        this.filterObject[key] = params[key]
      );
      this.users = this.userService.getFilteredUsers(this.filterObject);
    });
  }

}
