"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GetAllOrdersByRestaurantComponent = void 0;
var core_1 = require("@angular/core");
var GetAllOrdersByRestaurantComponent = /** @class */ (function () {
    function GetAllOrdersByRestaurantComponent(_Activatedroute, orderService) {
        this._Activatedroute = _Activatedroute;
        this.orderService = orderService;
        this.IdRestaurant = localStorage.getItem('IdRestaurant');
    }
    GetAllOrdersByRestaurantComponent.prototype.ngOnInit = function () {
        this.GetAllOrderByRestaurant();
    };
    GetAllOrdersByRestaurantComponent.prototype.GetAllOrderByRestaurant = function () {
        var _this = this;
        this.orderService.getOrderList().subscribe(function (res) {
            _this.orderService.order = res;
            console.log("OrderList =" + _this.orderService.order);
        });
        // Esorina ny []
        var objIdRestaurant = String(this.IdRestaurant).replace('[', '');
        var strIdRestaurant = objIdRestaurant.replace('"', '');
        var lastRemovedCharStrIdRestaurant = strIdRestaurant.replace(']', '');
        this.newStrIdRestaurant = lastRemovedCharStrIdRestaurant.replace('"', '');
        this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.orderService
                .getOrdersByRestaurant(_this.newStrIdRestaurant)
                .subscribe(function (res) {
                _this.orderService.order = res;
            });
        });
    };
    GetAllOrdersByRestaurantComponent = __decorate([
        core_1.Component({
            selector: 'app-get-all-orders-by-restaurant',
            templateUrl: './get-all-orders-by-restaurant.component.html',
            styleUrls: ['./get-all-orders-by-restaurant.component.css']
        })
    ], GetAllOrdersByRestaurantComponent);
    return GetAllOrdersByRestaurantComponent;
}());
exports.GetAllOrdersByRestaurantComponent = GetAllOrdersByRestaurantComponent;
