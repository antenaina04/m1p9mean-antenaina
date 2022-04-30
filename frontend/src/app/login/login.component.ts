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
  panier = localStorage.getItem('panier');
  obj!: any;
  loginError: any;
  sub: any;

  constructor(
    private _router: Router,
    private _Activatedroute: ActivatedRoute,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    //Clear all localStorage
    // localStorage.clear()
    // localStorage.removeItem('IdUser');
    // localStorage.removeItem('Username');
  }

  GetUserByEmailAndPassword(form?: NgForm) {
    this.obj = JSON.parse(String(this.panier));
    this.userService
      .GetUserByEmailAndPassword(
        String(this.userService.selectedUser.email),
        String(this.userService.selectedUser.password)
      )
      .subscribe((res) => {
        this.userService.users = res as User[];
        console.log('RESPONSA = ' + JSON.stringify(this.userService.users));
        if (this.userService.users.length != 0) {
          let IdUser = this.userService.users.map((user) => user._id);
          let UserName = this.userService.users.map((user) => user.name);
          let UserEmail = this.userService.users.map((user) => user.email);
          let UserProfile = this.userService.users.map(
            (user) => user.id_profile
          );
          console.log('IdUser  == ' + IdUser);
          console.log('UserName  == ' + UserName);
          console.log('UserEmail  == ' + UserEmail);
          console.log('UserProfile  == ' + UserProfile);

          //=> CreateSessions
          localStorage.setItem('Username', JSON.stringify(UserName));
          localStorage.setItem('IdUser', JSON.stringify(IdUser));

          //=>Check Cart
          if (
            this.obj == null ||
            this.obj === undefined ||
            this.obj.length == 0 ||
            this.obj.length == ''
          ) {
            this._router.navigateByUrl('/restaurant');
          } else {
            this.sub = this._Activatedroute.paramMap.subscribe(() => {
              const url = '/preview';
              this._router
                .navigateByUrl('/', {
                  skipLocationChange: true,
                })
                .then(() => {
                  this._router.navigate([url]);
                });
            });
          }
        }
        
        // => If there is an error on login
        else {
          this.resetLogin();
        }
      });
  }

  resetLogin(form?: NgForm) {
    if (form) form.reset();
    this.userService.selectedUser = {
      _id: '',
      email: '',
      password: '',
    };
    this.loginError =
      "L'adresse email ou le mots de passe ne correspond pas à un compte e-kaly";
  }
}
