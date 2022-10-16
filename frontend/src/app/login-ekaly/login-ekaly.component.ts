import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login-ekaly',
  templateUrl: './login-ekaly.component.html',
  styleUrls: ['./login-ekaly.component.css'],
})
export class LoginEkalyComponent implements OnInit {


  obj!: any;
  loginError: any;
  sub: any;

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
      .subscribe(async (res) => {
        this.userService.users = res as User[];
        console.log('RESPONSA = ' + JSON.stringify(this.userService.users));
        if (this.userService.users.length != 0) {
          let IdUser = this.userService.users.map((user) => user._id);
          let UserName = this.userService.users.map((user) => user.name);
          let UserEmail = this.userService.users.map((user) => user.email);
          let UserProfile = this.userService.users.map(
            (user) => user.id_profile
          );
          console.log('IdUser  == ' + IdUser); //AdminID
          console.log('UserName  == ' + UserName); //Admin
          console.log('UserEmail  == ' + UserEmail); //AdminEMAIL

          //=> CreateSessions
          localStorage.setItem('UserAdminName', JSON.stringify(UserName));
          localStorage.setItem('IdUserAdmin', JSON.stringify(IdUser));



          this.sub = await this._Activatedroute.paramMap.subscribe(() => {
            const url = '/admin1234-home'; //Redirection after login ADMIN OK !!
            this._router
              .navigateByUrl('/', {
                skipLocationChange: true,
              })
              .then(() => {
                this._router.navigate([url]);
              });
          }); 
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
    this.loginError = "Vous n'etes pas un responsable de E-Kaly. Merci! ";
  }

  //CheckUser if username: ekaly@mail.com password: ekaly1234
}
