"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderDetailsService = void 0;
var core_1 = require("@angular/core");
var order_details_model_1 = require("./order-details.model");
var OrderDetailsService = /** @class */ (function () {
    function OrderDetailsService(http) {
        this.http = http;
        this.selectedOrderDetails = new order_details_model_1.OrderDetails();
        this.orderDetails = [];
        this.baseURL = 'http://localhost:3000/orderDetails';
    }
    OrderDetailsService.prototype.getOrderDetailsByIdOrder = function (id_order) {
        return this.http.get(this.baseURL + "/order/" + id_order);
    };
    OrderDetailsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], OrderDetailsService);
    return OrderDetailsService;
}());
exports.OrderDetailsService = OrderDetailsService;
