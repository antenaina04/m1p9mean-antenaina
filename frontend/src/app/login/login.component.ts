import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

let email: string;
let password: string;
let id_profile: string;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService],
})
export class LoginComponent implements OnInit {
  constructor(
    private _router: Router,
    private _Activatedroute: ActivatedRoute,
    public userService: UserService
  ) {}

  ngOnInit(): void {}

  GetUserByEmailAndPassword(form?: NgForm) {
    this.userService
      .GetUserByEmailAndPassword(
        String(this.userService.selectedUser.email),
        String(this.userService.selectedUser.password)
      )
      .subscribe((res) => {
        this.userService.selectedUser = res as User;
        console.log('RESPONSA = '+JSON.stringify(this.userService.selectedUser));
        if (this.userService.selectedUser != 0) {
          //=> CreateSessions
          console.log('id_profile  = '+JSON.stringify(this.userService.selectedUser.id_profile)); //Cannot get id_profile [undefined] ???
          this._router.navigateByUrl('/restaurant');
        } 
        else {}
      });
  }
}
