"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DeliveryService = void 0;
var core_1 = require("@angular/core");
var delivery_model_1 = require("./delivery.model");
var DeliveryService = /** @class */ (function () {
    function DeliveryService(http) {
        this.http = http;
        this.selectedDelivery = new delivery_model_1.Delivery();
        this.delivery = [];
        this.baseURL = 'http://localhost:3000/delivery';
    }
    DeliveryService.prototype.postDelivery = function (delivery) {
        return this.http.post(this.baseURL, delivery);
    };
    DeliveryService.prototype.putDelivery = function (delivery, _id) {
        return this.http.put(this.baseURL + "/" + _id, delivery);
    };
    DeliveryService.prototype.getDeliveryList = function () {
        return this.http.get(this.baseURL);
    };
    DeliveryService.prototype.GetDeliveryByDelivererName = function (delivery_deliverer) {
        return this.http.get(this.baseURL + "/GetDeliveryByDelivererName/" + delivery_deliverer);
    };
    // Calculer nombre de livraison
    DeliveryService.prototype.DeliveryCount = function (dishes_count) {
        var delivery_count;
        delivery_count = dishes_count / 2; // Max Plat pour 1 livraison = 2
        return Math.round(delivery_count);
    };
    // Calcul benefice
    DeliveryService.prototype.GetBenefits = function (initial_price, Percentage) {
        var Benefits;
        Benefits = (Percentage * initial_price) / 100;
        return Benefits;
    };
    // Calcul frais de livraison
    DeliveryService.prototype.GetShippingCost = function (initial_price, Percentage, DeliveryCount) {
        var ShippingCost;
        ShippingCost =
            (this.GetBenefits(initial_price, Percentage) + initial_price) *
                DeliveryCount;
        return ShippingCost;
    };
    // Calcul Montant total a payer
    DeliveryService.prototype.GetTotalAmountToPay = function (subtotal, ShippingCost) {
        var TotalAmountToPay;
        TotalAmountToPay = subtotal + ShippingCost;
        return TotalAmountToPay;
    };
    DeliveryService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DeliveryService);
    return DeliveryService;
}());
exports.DeliveryService = DeliveryService;
