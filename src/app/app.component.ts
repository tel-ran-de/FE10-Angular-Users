import { Component } from '@angular/core';
import {User} from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users-project';

  firstNameFilter = 'John';

  users: User[] = [
    {
      firsName: 'Vasya',
      lastName: 'Pupkin',
      age: 20,
      city: 'Berlin'
    },
    {
      firsName: 'John',
      lastName: 'Connor',
      age: 35,
      city: 'Los Angeles'
    }
  ];

  filter(firstName: string): User[] {
    const filteredUsers: User[] = [];
    this.users.forEach(user => {
      if (user.firsName === firstName) {
        filteredUsers.push(user);
      }
    });
    return filteredUsers;
  }

}
