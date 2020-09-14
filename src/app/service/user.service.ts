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

  getFilteredUsers(filter: {key: string, value: any}[]): User[] {
    const filteredUsers: User[] = [];
    this.getUsers().forEach(user => {
      filter.forEach( element => {
          if (user[element.key].toString() === element.value.toString()) {
            filteredUsers.push(user);
          }
      });
    });
    return filteredUsers;
  }
}
