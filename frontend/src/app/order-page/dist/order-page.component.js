"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderPageComponent = void 0;
var core_1 = require("@angular/core");
var OrderPageComponent = /** @class */ (function () {
    function OrderPageComponent(cartService, _router, _Activatedroute) {
        this.cartService = cartService;
        this._router = _router;
        this._Activatedroute = _Activatedroute;
        this.panier = localStorage.getItem('panier');
    }
    OrderPageComponent.prototype.ngOnInit = function () {
        this.obj = JSON.parse(String(this.panier));
        console.log(this.obj);
        this.sum();
    };
    // removeToCart(dishes: Dishes) {
    //   this.cartService.removeToCart(dishes);
    //   this.sum();
    //   window.alert(dishes.dishes_name + ' supprimé du panier!');
    // }
    OrderPageComponent.prototype.removeToCart = function (selectedItem) {
        var index = this.obj.indexOf(selectedItem);
        this.obj.splice(index, 1);
        this.sum();
        console.log('OBJ =' + JSON.stringify(this.obj.length));
        localStorage.setItem('panier', JSON.stringify(this.obj));
    };
    OrderPageComponent.prototype.sum = function () {
        var _this = this;
        this.totalPrice = 0;
        if (this.obj) {
            this.obj.map(function (_dishes) {
                var price = _dishes.dishes_price || 0;
                _this.totalPrice += price;
            });
        }
    };
    OrderPageComponent.prototype.checkout = function () {
        this._router.navigateByUrl('/checkout');
    };
    OrderPageComponent = __decorate([
        core_1.Component({
            selector: 'app-order-page',
            templateUrl: './order-page.component.html',
            styleUrls: ['./order-page.component.css']
        })
    ], OrderPageComponent);
    return OrderPageComponent;
}());
exports.OrderPageComponent = OrderPageComponent;
