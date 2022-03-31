import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  selectedUser: User = new User;
  users: User[] = [];
  readonly baseURL: 'http://localhost:3000/users' = "http://localhost:3000/users";

  constructor(private http: HttpClient) {}

  postUser(user: User) {
    return this.http.post(this.baseURL, user);
  }
}
