import { Injectable } from '@angular/core';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      firstName: 'Vasya',
      lastName: 'Pupkin',
      age: 20,
      city: 'Berlin'
    },
    {
      firstName: 'John',
      lastName: 'Connor',
      age: 35,
      city: 'Los Angeles'
    }
  ];

  constructor() { }

  getUsers(): User[] {
    return this.users;
  }

  getFilteredUsers(filter: User): User[] {
    const filteredUsers: User[] = [];
    this.getUsers().forEach(user => {
      Object.keys(filter).forEach( key => {
        if (filter[key] !== null) {
          if (user[key].toString() === filter[key].toString()) {
            filteredUsers.push(user);
          }
        }
      });
    });
    return filteredUsers;
  }
}
