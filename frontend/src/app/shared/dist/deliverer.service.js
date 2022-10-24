"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DelivererService = void 0;
var core_1 = require("@angular/core");
var deliverer_model_1 = require("./deliverer.model");
var DelivererService = /** @class */ (function () {
    function DelivererService(http) {
        this.http = http;
        this.selectedDeliverer = new deliverer_model_1.Deliverer();
        this.deliverers = [];
        this.baseURL = 'https://m1p9mean-antenaina-backend.herokuapp.com/deliverers';
    }
    DelivererService.prototype.postDeliverer = function (deliverer) {
        return this.http.post(this.baseURL, deliverer);
    };
    DelivererService.prototype.GetDelivererByEmailAndPassword = function (deliverer_email, deliverer_password) {
        return this.http.get(this.baseURL + "/check_deliverer/" + deliverer_email + "/deliverer/" + deliverer_password);
    };
    DelivererService.prototype.GetDelivererByIdDeliverer = function (id_deliverer) {
        return this.http.get(this.baseURL + "/" + id_deliverer);
    };
    DelivererService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DelivererService);
    return DelivererService;
}());
exports.DelivererService = DelivererService;
