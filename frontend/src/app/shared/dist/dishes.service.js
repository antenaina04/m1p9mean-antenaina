"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DishesService = void 0;
var core_1 = require("@angular/core");
var dishes_model_1 = require("./dishes.model");
var restaurant_model_1 = require("./restaurant.model");
var DishesService = /** @class */ (function () {
    function DishesService(http) {
        this.http = http;
        this.selectedDishes = new dishes_model_1.Dishes();
        this.selectedRestaurant = new restaurant_model_1.Restaurant();
        this.dishes = [];
        this.baseURL = 'http://localhost:3000/dishes';
    }
    DishesService.prototype.postUser = function (dishes) {
        return this.http.post(this.baseURL, dishes);
    };
    DishesService.prototype.getDishesList = function () {
        return this.http.get(this.baseURL);
    };
    DishesService.prototype.getDishesByRestaurant = function (id_restaurant) {
        return this.http.get(this.baseURL + "/restaurant/" + id_restaurant);
    };
    DishesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DishesService);
    return DishesService;
}());
exports.DishesService = DishesService;
