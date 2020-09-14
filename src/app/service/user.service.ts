import { Injectable } from '@angular/core';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      id: '1',
      firstName: 'Vasya',
      lastName: 'Pupkin',
      age: 20,
      city: 'Berlin'
    },
    {
      id: '1',
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

  getUserById(id: string): User {
    return this.users.find(user => user.id === id);
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
