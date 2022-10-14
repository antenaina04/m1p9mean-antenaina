"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderListComponent = void 0;
var core_1 = require("@angular/core");
var OrderListComponent = /** @class */ (function () {
    function OrderListComponent(orderService, _Activatedroute, _router) {
        this.orderService = orderService;
        this._Activatedroute = _Activatedroute;
        this._router = _router;
        this.IdUser = localStorage.getItem('IdUser');
    }
    OrderListComponent.prototype.ngOnInit = function () {
        this.GetOrderByUser();
    };
    OrderListComponent.prototype.GetOrderByUser = function () {
        var _this = this;
        var objIdUser = String(this.IdUser).replace('[', '');
        var strIdUser = objIdUser.replace('"', '');
        var lastRemovedCharStrIdUser = strIdUser.replace(']', '');
        this.newStrIdUser = lastRemovedCharStrIdUser.replace('"', '');
        this.orderService.GetOrderByIdUser(this.newStrIdUser).subscribe(function (res) {
            _this.orderService.order = res;
            console.log('OrderList =' + _this.orderService.order);
        });
    };
    OrderListComponent.prototype.onClick = function (order) {
        var _this = this;
        this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            var url = 'GetOrderByUser/' + String(order._id);
            _this._router
                .navigateByUrl('/', {
                skipLocationChange: true
            })
                .then(function () {
                _this._router.navigate([url]);
            });
        });
    };
    OrderListComponent = __decorate([
        core_1.Component({
            selector: 'app-order-list',
            templateUrl: './order-list.component.html',
            styleUrls: ['./order-list.component.css']
        })
    ], OrderListComponent);
    return OrderListComponent;
}());
exports.OrderListComponent = OrderListComponent;
