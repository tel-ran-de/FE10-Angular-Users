import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('assets/users.json');
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
