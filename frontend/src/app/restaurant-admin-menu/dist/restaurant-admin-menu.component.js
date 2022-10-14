"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RestaurantAdminMenuComponent = void 0;
var core_1 = require("@angular/core");
var RestaurantAdminMenuComponent = /** @class */ (function () {
    function RestaurantAdminMenuComponent(_router) {
        this._router = _router;
        this.IdRestaurant = localStorage.getItem('IdRestaurant');
    }
    RestaurantAdminMenuComponent.prototype.ngOnInit = function () {
        if (this.IdRestaurant == null ||
            this.IdRestaurant == undefined ||
            this.IdRestaurant == '' ||
            this.IdRestaurant == 'null') {
            this._router.navigateByUrl('/loginRestaurant-ekaly');
        }
        else {
            var objIdRestaurant = String(this.IdRestaurant).replace('[', '');
            var strIdRestaurant = objIdRestaurant.replace('"', '');
            var lastRemovedCharStrIdRestaurant = strIdRestaurant.replace(']', '');
            this.newStrIdRestaurant = lastRemovedCharStrIdRestaurant.replace('"', '');
            this._router.navigateByUrl('/restaurantAdminMenu-ekaly/' + this.newStrIdRestaurant);
        }
    };
    RestaurantAdminMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-restaurant-admin-menu',
            templateUrl: './restaurant-admin-menu.component.html',
            styleUrls: ['./restaurant-admin-menu.component.css']
        })
    ], RestaurantAdminMenuComponent);
    return RestaurantAdminMenuComponent;
}());
exports.RestaurantAdminMenuComponent = RestaurantAdminMenuComponent;
