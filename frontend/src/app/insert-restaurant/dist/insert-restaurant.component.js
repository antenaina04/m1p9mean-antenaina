"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InsertRestaurantComponent = void 0;
var core_1 = require("@angular/core");
var InsertRestaurantComponent = /** @class */ (function () {
    function InsertRestaurantComponent(_Activatedroute, restaurantService) {
        this._Activatedroute = _Activatedroute;
        this.restaurantService = restaurantService;
    }
    InsertRestaurantComponent.prototype.ngOnInit = function () { };
    InsertRestaurantComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.restaurantService.selectedRestaurant = {
            _id: '',
            restaurant_name: '',
            restaurant_location: '',
            restaurant_phone: '',
            restaurant_email: '',
            restaurant_password: ''
        };
    };
    InsertRestaurantComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(this.restaurantService.selectedRestaurant.restaurant_name);
        console.log(this.restaurantService.selectedRestaurant.restaurant_location);
        console.log(this.restaurantService.selectedRestaurant.restaurant_phone);
        if (this.restaurantService.selectedRestaurant.restaurant_name == '' ||
            this.restaurantService.selectedRestaurant.restaurant_name == undefined) {
            console.log('Veuillez remplir restaurant_name');
        }
        else if (this.restaurantService.selectedRestaurant.restaurant_location == '' ||
            this.restaurantService.selectedRestaurant.restaurant_location == undefined) {
            console.log('Veuillez remplir restaurant_location');
        }
        else if (this.restaurantService.selectedRestaurant.restaurant_phone == null ||
            this.restaurantService.selectedRestaurant.restaurant_phone == undefined) {
            console.log('Veuillez remplir restaurant_phone');
        }
        else if (this.restaurantService.selectedRestaurant.restaurant_email == null ||
            this.restaurantService.selectedRestaurant.restaurant_email == undefined) {
            console.log('Veuillez remplir restaurant_email');
        }
        else if (this.restaurantService.selectedRestaurant.restaurant_password == null ||
            this.restaurantService.selectedRestaurant.restaurant_password == undefined) {
            console.log('Veuillez remplir restaurant_password');
        }
        else {
            console.log('okaaayyy eee===' +
                JSON.stringify(this.restaurantService.selectedRestaurant._id));
            this.restaurantService.postRestaurant(form === null || form === void 0 ? void 0 : form.value).subscribe(function (res) {
                console.log('-- INSERT RESTAURANT SUCCEEDED --');
                _this.resetForm(form);
            });
            console.log('INSERT {[Restaurant]} OK');
        }
    };
    InsertRestaurantComponent = __decorate([
        core_1.Component({
            selector: 'app-insert-restaurant',
            templateUrl: './insert-restaurant.component.html',
            styleUrls: ['./insert-restaurant.component.css']
        })
    ], InsertRestaurantComponent);
    return InsertRestaurantComponent;
}());
exports.InsertRestaurantComponent = InsertRestaurantComponent;
