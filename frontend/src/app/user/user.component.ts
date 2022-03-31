import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { UserService } from '../shared/user.service';

let name: string;
let email: string;
let phone: string;
let id_profile: string;
let password: string;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService],
})
export class UserComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.userService.selectedUser = {
      _id: '',
      name: '',
      email: '',
      phone: '',
      id_profile: '0',
      password: '',
    };
  }

  onSubmit(form?: NgForm) {
    console.log(this.userService.selectedUser.name);
    console.log(this.userService.selectedUser.email);
    console.log(this.userService.selectedUser.phone);
    console.log(this.userService.selectedUser.id_profile);
    console.log(this.userService.selectedUser.password);
    if (this.userService.selectedUser.name == "") {
      console.log('Veuillez remplir votre nom');
    } 
    else if (this.userService.selectedUser.email ==""){
      console.log('Veuillez remplir votre email');
    }
    else if (this.userService.selectedUser.phone ==""){
      console.log('Veuillez remplir votre phone');
    }
    else if (this.userService.selectedUser.id_profile ==""){
      console.log('Veuillez remplir votre profil');
    }
    else if (this.userService.selectedUser.password ==""){
      console.log('Veuillez remplir votre mot de passe');
    }    
    else {
      // this.userService.postUser(form?.value).subscribe((res) => {
        //   console.log('-- INSERT USER SUCCEEDED --');
        //   this.resetForm(form);
        // });
        console.log('INSERT OK');
    }
  }
}
