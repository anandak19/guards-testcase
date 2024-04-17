import { Injectable } from '@angular/core';
import { UserDetails } from '../Model/user-details';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: UserDetails[] = [
    { userName: 'admin', password: '123' },
    { userName: 'anu', password: 'anu' },
    { userName: 'manu', password: 'manu' }
  ];

  constructor() { }

  getUsers(): UserDetails[] {
    return this.users;
  }
}
