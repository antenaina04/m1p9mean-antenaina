"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var user_service_1 = require("../shared/user.service");
var email;
var password;
var id_profile;
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _Activatedroute, userService) {
        this._router = _router;
        this._Activatedroute = _Activatedroute;
        this.userService = userService;
        this.panier = localStorage.getItem('panier');
    }
    LoginComponent.prototype.ngOnInit = function () {
        //Clear all localStorage
        // localStorage.clear()
        // localStorage.removeItem('IdUser');
        // localStorage.removeItem('Username');
    };
    LoginComponent.prototype.GetUserByEmailAndPassword = function (form) {
        var _this = this;
        this.obj = JSON.parse(String(this.panier));
        this.userService
            .GetUserByEmailAndPassword(String(this.userService.selectedUser.email), String(this.userService.selectedUser.password))
            .subscribe(function (res) {
            _this.userService.users = res;
            console.log('RESPONSA = ' + JSON.stringify(_this.userService.users));
            if (_this.userService.users.length != 0) {
                var IdUser = _this.userService.users.map(function (user) { return user._id; });
                var UserName = _this.userService.users.map(function (user) { return user.name; });
                var UserEmail = _this.userService.users.map(function (user) { return user.email; });
                var UserProfile = _this.userService.users.map(function (user) { return user.id_profile; });
                console.log('IdUser  == ' + IdUser);
                console.log('UserName  == ' + UserName);
                console.log('UserEmail  == ' + UserEmail);
                console.log('UserProfile  == ' + UserProfile);
                //=> CreateSessions
                localStorage.setItem('Username', JSON.stringify(UserName));
                localStorage.setItem('IdUser', JSON.stringify(IdUser));
                //=>Check Cart
                if (_this.obj == null ||
                    _this.obj === undefined ||
                    _this.obj.length == 0 ||
                    _this.obj.length == '') {
                    _this._router.navigateByUrl('/restaurant');
                }
                else {
                    _this.sub = _this._Activatedroute.paramMap.subscribe(function () {
                        var url = '/checkout';
                        _this._router
                            .navigateByUrl('/', {
                            skipLocationChange: true
                        })
                            .then(function () {
                            _this._router.navigate([url]);
                        });
                    });
                }
            }
            // => If there is an error on login
            else {
                _this.resetLogin();
            }
        });
    };
    LoginComponent.prototype.resetLogin = function (form) {
        if (form)
            form.reset();
        this.userService.selectedUser = {
            _id: '',
            email: '',
            password: ''
        };
        this.loginError =
            "L'adresse email ou le mots de passe ne correspond pas à un compte e-kaly";
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
            providers: [user_service_1.UserService]
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
