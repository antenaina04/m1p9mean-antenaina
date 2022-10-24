"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RestaurantService = void 0;
var core_1 = require("@angular/core");
var restaurant_model_1 = require("./restaurant.model");
var RestaurantService = /** @class */ (function () {
    function RestaurantService(http) {
        this.http = http;
        this.selectedRestaurant = new restaurant_model_1.Restaurant();
        this.restaurants = [];
        this.baseURL = 'https://m1p9mean-antenaina-backend.herokuapp.com/restaurants';
    }
    RestaurantService.prototype.postRestaurant = function (restaurant) {
        return this.http.post(this.baseURL, restaurant);
    };
    RestaurantService.prototype.getRestaurantList = function () {
        return this.http.get(this.baseURL);
    };
    RestaurantService.prototype.getRestaurantByIdRestaurant = function (id_restaurant) {
        return this.http.get(this.baseURL + "/" + id_restaurant);
    };
    RestaurantService.prototype.GetRestaurantByRestaurantName = function (restaurant_name) {
        return this.http.get(this.baseURL + "/GetRestaurantByRestaurantName/" + restaurant_name);
    };
    RestaurantService.prototype.GetRestaurantByEmailAndPassword = function (restaurant_email, restaurant_password) {
        // console.log('email ------' + email);
        // console.log('password ------' + password);
        return this.http.get(this.baseURL + "/check_restaurant/" + restaurant_email + "/restaurant/" + restaurant_password);
    };
    RestaurantService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], RestaurantService);
    return RestaurantService;
}());
exports.RestaurantService = RestaurantService;
