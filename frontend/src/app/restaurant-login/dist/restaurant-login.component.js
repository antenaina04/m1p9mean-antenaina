"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RestaurantLoginComponent = void 0;
var core_1 = require("@angular/core");
var RestaurantLoginComponent = /** @class */ (function () {
    function RestaurantLoginComponent(_router, restaurantService) {
        this._router = _router;
        this.restaurantService = restaurantService;
    }
    RestaurantLoginComponent.prototype.ngOnInit = function () {
        // Remove LocalStorage.getItem('IdRestaurant')
        localStorage.removeItem('IdRestaurant');
        localStorage.removeItem('restaurant_name');
    };
    RestaurantLoginComponent.prototype.GetRestaurantByEmailAndPassword = function (form) {
        var _this = this;
        // this.obj = JSON.parse(String(this.panier));
        this.restaurantService
            .GetRestaurantByEmailAndPassword(String(this.restaurantService.selectedRestaurant.restaurant_email), String(this.restaurantService.selectedRestaurant.restaurant_password))
            .subscribe(function (res) {
            _this.restaurantService.restaurants = res;
            console.log('RESPONSA = ' + JSON.stringify(_this.restaurantService.restaurants));
            if (_this.restaurantService.restaurants.length != 0) {
                var IdRestaurant = _this.restaurantService.restaurants.map(function (restaurant) { return restaurant._id; });
                var restaurant_name = _this.restaurantService.restaurants.map(function (restaurant) { return restaurant.restaurant_name; });
                var restaurant_email = _this.restaurantService.restaurants.map(function (restaurant) { return restaurant.restaurant_email; });
                console.log('IdRestaurant  == ' + IdRestaurant);
                console.log('restaurant_name  == ' + restaurant_name);
                console.log('restaurant_email  == ' + restaurant_email);
                //=> CreateSessions
                localStorage.setItem('restaurant_name', JSON.stringify(restaurant_name));
                localStorage.setItem('IdRestaurant', JSON.stringify(IdRestaurant));
                _this._router.navigateByUrl('/restaurantAdminMenu-ekaly');
            }
            // => If there is an error on login
            else {
                _this.resetLogin();
            }
        });
    };
    RestaurantLoginComponent.prototype.resetLogin = function (form) {
        if (form)
            form.reset();
        this.restaurantService.selectedRestaurant = {
            _id: '',
            restaurant_email: '',
            restaurant_password: ''
        };
        this.loginError =
            "L'adresse email ou le mots de passe ne correspond pas à un compte restaurant de e-kaly";
    };
    RestaurantLoginComponent = __decorate([
        core_1.Component({
            selector: 'app-restaurant-login',
            templateUrl: './restaurant-login.component.html',
            styleUrls: ['./restaurant-login.component.css']
        })
    ], RestaurantLoginComponent);
    return RestaurantLoginComponent;
}());
exports.RestaurantLoginComponent = RestaurantLoginComponent;
