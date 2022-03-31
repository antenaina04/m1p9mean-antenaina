"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserComponent = void 0;
var core_1 = require("@angular/core");
var user_service_1 = require("../shared/user.service");
var name;
var email;
var phone;
var id_profile;
var password;
var UserComponent = /** @class */ (function () {
    function UserComponent(userService) {
        this.userService = userService;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    UserComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.userService.selectedUser = {
            _id: '',
            name: '',
            email: '',
            phone: '',
            id_profile: '0',
            password: ''
        };
    };
    UserComponent.prototype.onSubmit = function (form) {
        console.log(this.userService.selectedUser.name);
        console.log(this.userService.selectedUser.email);
        console.log(this.userService.selectedUser.phone);
        console.log(this.userService.selectedUser.id_profile);
        console.log(this.userService.selectedUser.password);
        if (this.userService.selectedUser.name == "") {
            console.log('Veuillez remplir votre nom');
        }
        else if (this.userService.selectedUser.email == "") {
            console.log('Veuillez remplir votre email');
        }
        else if (this.userService.selectedUser.phone == "") {
            console.log('Veuillez remplir votre phone');
        }
        else if (this.userService.selectedUser.id_profile == "") {
            console.log('Veuillez remplir votre profil');
        }
        else if (this.userService.selectedUser.password == "") {
            console.log('Veuillez remplir votre mot de passe');
        }
        else {
            // this.userService.postUser(form?.value).subscribe((res) => {
            //   console.log('-- INSERT USER SUCCEEDED --');
            //   this.resetForm(form);
            // });
            console.log('INSERT OK');
        }
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css'],
            providers: [user_service_1.UserService]
        })
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
