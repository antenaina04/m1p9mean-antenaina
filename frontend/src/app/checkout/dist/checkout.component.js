"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CheckoutComponent = void 0;
var core_1 = require("@angular/core");
var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent() {
        this.Username = localStorage.getItem('Username');
        this.IdUser = localStorage.getItem('IdUser');
        this.panier = localStorage.getItem('panier');
        this.show = true;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.obj = JSON.parse(String(this.panier));
        this.sum();
        if (this.Username == null ||
            this.Username == undefined ||
            this.Username == '' ||
            this.Username == 'null') {
            this.show = true;
        }
        else {
            this.show = false;
        }
    };
    CheckoutComponent.prototype.sum = function () {
        var _this = this;
        this.totalPrice = 0;
        if (this.obj) {
            this.obj.map(function (_dishes) {
                var price = _dishes.dishes_price || 0;
                _this.totalPrice += price;
            });
        }
    };
    CheckoutComponent = __decorate([
        core_1.Component({
            selector: 'app-checkout',
            templateUrl: './checkout.component.html',
            styleUrls: ['./checkout.component.css']
        })
    ], CheckoutComponent);
    return CheckoutComponent;
}());
exports.CheckoutComponent = CheckoutComponent;
