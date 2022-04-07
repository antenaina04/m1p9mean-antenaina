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
  selectedUser: User = new User();
  users: User[] = [];
  email: any;
  password: any;

  readonly baseURL: 'http://localhost:3000/users' =
    'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  postUser(user: User) {
    return this.http.post(this.baseURL, user);
  }

  GetUserByEmailAndPassword(
    email: string | null,
    password: string | null
  ): Observable<User[]> {
    // console.log('email ------' + email);
    // console.log('password ------' + password);
    return this.http.get<User[]>(
      this.baseURL + `/check_user/` + email + `/user/` + password
    );
  }
}
