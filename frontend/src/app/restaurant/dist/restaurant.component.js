"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RestaurantComponent = void 0;
var core_1 = require("@angular/core");
var restaurant_service_1 = require("../shared/restaurant.service");
var restaurant_name;
var restaurant_location;
var restaurant_phone;
var restaurant_logo;
var RestaurantComponent = /** @class */ (function () {
    function RestaurantComponent(restaurantService) {
        this.restaurantService = restaurantService;
    }
    RestaurantComponent.prototype.ngOnInit = function () {
        this.refreshRestaurantList();
    };
    RestaurantComponent.prototype.refreshRestaurantList = function () {
        var _this = this;
        this.restaurantService.getRestaurantList().subscribe(function (res) {
            _this.restaurantService.restaurants = res;
        });
    };
    RestaurantComponent.prototype.search = function (form) {
        var _this = this;
        console.log(form === null || form === void 0 ? void 0 : form.value.restaurant_name);
        if ((form === null || form === void 0 ? void 0 : form.value.restaurant_name) == '' ||
            (form === null || form === void 0 ? void 0 : form.value.restaurant_name) == undefined) {
            // console.log("REFRESY");
            this.refreshRestaurantList();
        }
        else {
            this.restaurantService
                .GetRestaurantByRestaurantName(String(this.restaurantService.selectedRestaurant.restaurant_name))
                .subscribe(function (res) {
                _this.restaurantService.restaurants = res;
                // console.log("okaaayyy eee==="+JSON.stringify(this.restaurantService.selectedRestaurant));
            });
        }
    };
    RestaurantComponent = __decorate([
        core_1.Component({
            selector: 'app-restaurant',
            templateUrl: './restaurant.component.html',
            styleUrls: ['./restaurant.component.css'],
            providers: [restaurant_service_1.RestaurantService]
        })
    ], RestaurantComponent);
    return RestaurantComponent;
}());
exports.RestaurantComponent = RestaurantComponent;
