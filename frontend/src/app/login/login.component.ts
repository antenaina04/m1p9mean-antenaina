import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

let email: string;
let password: string;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService],
})
export class LoginComponent implements OnInit {
  constructor(
    private _Activatedroute: ActivatedRoute,
    public userService: UserService
  ) {}

  ngOnInit(): void {}

  GetUserByEmailAndPassword(form?: NgForm) {
    // console.log('email :::: ' + this.userService.selectedUser.email);
    // console.log('password :::: ' + this.userService.selectedUser.password);
    this.userService
      .GetUserByEmailAndPassword(String(this.userService.selectedUser.email), String(this.userService.selectedUser.password))
      .subscribe((res) => {
        this.userService.selectedUser = res as User;
        // console.log('RESPONSA = ' + JSON.stringify(this.userService.selectedUser));
      });
  }
}
