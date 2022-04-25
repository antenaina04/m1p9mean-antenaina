"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PreviewComponent = void 0;
var core_1 = require("@angular/core");
var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(_Activatedroute, deliveryService, restaurantService, userService) {
        this._Activatedroute = _Activatedroute;
        this.deliveryService = deliveryService;
        this.restaurantService = restaurantService;
        this.userService = userService;
        this.Username = localStorage.getItem('Username');
        this.IdUser = localStorage.getItem('IdUser');
        this.panier = localStorage.getItem('panier');
    }
    PreviewComponent.prototype.ngOnInit = function () {
        this.obj = JSON.parse(String(this.panier));
        this.sum();
        this.GetUserByIdUser();
        this.GetAdressAndDateDelivery();
        this.GetRestaurantByIdRestaurant();
        this.GetAmountSummary();
        this.GetOrderDate();
    };
    // GetUser
    PreviewComponent.prototype.GetUserByIdUser = function () {
        var _this = this;
        var objIdUser = String(this.IdUser).replace('[', '');
        var strIdUser = objIdUser.replace('"', '');
        var lastRemovedCharStrIdUser = strIdUser.replace(']', '');
        this.newStrIdUser = lastRemovedCharStrIdUser.replace('"', '');
        this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.userService.GetUserByIdUser(_this.newStrIdUser).subscribe(function (res) {
                _this.userService.selectedUser = res;
            });
        });
    };
    //GetRestaurant
    PreviewComponent.prototype.GetRestaurantByIdRestaurant = function () {
        var _this = this;
        if (this.obj) {
            this.obj.map(function (_dishes) {
                var id_restaurant = _dishes.id_restaurant;
                _this.sub = _this._Activatedroute.paramMap.subscribe(function () {
                    _this.restaurantService
                        .getRestaurantByIdRestaurant(id_restaurant)
                        .subscribe(function (res) {
                        _this.restaurantService.selectedRestaurant = res;
                    });
                });
            });
        }
    };
    PreviewComponent.prototype.GetAdressAndDateDelivery = function () {
        var _this = this;
        this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.delivery_adress = String(params === null || params === void 0 ? void 0 : params.get('adressDelivery'));
            // var deliveryDate = String(params?.get('dateDelivery'));
            // new Date(dateString)
            var dateDelivery = new Date(String(params === null || params === void 0 ? void 0 : params.get('dateDelivery')));
            var date = dateDelivery.getDate() + '/' + (dateDelivery.getMonth() + 1) + '/' + dateDelivery.getFullYear();
            var time = dateDelivery.getHours() + "h " + dateDelivery.getMinutes() + "min";
            var DateTimeDelivery = date + ' ' + time;
            _this.delivery_date = String(DateTimeDelivery);
        });
    };
    PreviewComponent.prototype.sum = function () {
        var _this = this;
        this.totalPrice = 0;
        if (this.obj) {
            this.obj.map(function (_dishes) {
                var price = _dishes.dishes_price || 0;
                _this.totalPrice += price;
            });
        }
    };
    PreviewComponent.prototype.GetAmountSummary = function () {
        var initial_price = 4000;
        var Percentage = 50;
        this.Benefice = this.deliveryService.GetBenefits(initial_price, Percentage);
        this.DeliveryCount = this.deliveryService.DeliveryCount(this.obj.length);
        this.ShippingCost = this.deliveryService.GetShippingCost(initial_price, Percentage, this.DeliveryCount);
        this.TotalAmountToPay = this.deliveryService.GetTotalAmountToPay(this.totalPrice, this.ShippingCost);
    };
    PreviewComponent.prototype.GetOrderDate = function () {
        var today = new Date();
        var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        var time = today.getHours() + "h " + today.getMinutes() + "min";
        var CurrentDate = date + ' ' + time;
        this.OrderDate = String(CurrentDate);
    };
    PreviewComponent = __decorate([
        core_1.Component({
            selector: 'app-preview',
            templateUrl: './preview.component.html',
            styleUrls: ['./preview.component.css']
        })
    ], PreviewComponent);
    return PreviewComponent;
}());
exports.PreviewComponent = PreviewComponent;
