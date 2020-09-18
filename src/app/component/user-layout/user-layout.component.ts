import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {flatMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {
  user: User;
  asyncUser: Observable<User>;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      flatMap(params => this.userService.getUserById(params.id))
    ).subscribe(user => this.user = user);
    this.asyncUser = this.getUser();
  }

  getUser(): Observable<User> {
    return this.route.params.pipe(
      flatMap(params => this.userService.getUserById(params.id))
    );
}

}
