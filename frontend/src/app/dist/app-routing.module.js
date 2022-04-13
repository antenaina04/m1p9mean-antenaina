"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.routingComponents = exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var restaurant_component_1 = require("./restaurant/restaurant.component");
var dishes_component_1 = require("./dishes/dishes.component");
var user_component_1 = require("./user/user.component");
var login_component_1 = require("./login/login.component");
var order_page_component_1 = require("./order-page/order-page.component");
var insert_dishes_component_1 = require("./insert-dishes/insert-dishes.component");
var insert_restaurant_component_1 = require("./insert-restaurant/insert-restaurant.component");
var about_us_component_1 = require("./about-us/about-us.component");
var routes = [
    { path: '', component: restaurant_component_1.RestaurantComponent },
    { path: 'restaurant', component: restaurant_component_1.RestaurantComponent },
    { path: 'dishes', component: dishes_component_1.DishesComponent },
    { path: 'dishes/restaurant/:id_restaurant', component: dishes_component_1.DishesComponent },
    { path: 'order', component: order_page_component_1.OrderPageComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'saveOrUpdateDishes', component: insert_dishes_component_1.InsertDishesComponent },
    { path: 'saveOrUpdateRestaurant', component: insert_restaurant_component_1.InsertRestaurantComponent },
    { path: 'aboutUs', component: about_us_component_1.AboutUsComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [restaurant_component_1.RestaurantComponent, dishes_component_1.DishesComponent];
