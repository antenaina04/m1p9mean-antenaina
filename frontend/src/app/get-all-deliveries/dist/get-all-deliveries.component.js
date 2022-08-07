"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GetAllDeliveriesComponent = void 0;
var core_1 = require("@angular/core");
var GetAllDeliveriesComponent = /** @class */ (function () {
    function GetAllDeliveriesComponent(_Activatedroute, deliveryService, _router) {
        this._Activatedroute = _Activatedroute;
        this.deliveryService = deliveryService;
        this._router = _router;
        this.IdDeliverer = localStorage.getItem('IdDeliverer');
    }
    GetAllDeliveriesComponent.prototype.ngOnInit = function () {
        this.GetOrderDeliveryList();
    };
    GetAllDeliveriesComponent.prototype.GetOrderDeliveryList = function () {
        var _this = this;
        this.deliveryService.GetOrderDeliveryList().subscribe(function (res) {
            _this.deliveryService.delivery = res;
            console.log('DeliveryList =' + _this.deliveryService.delivery);
        });
    };
    GetAllDeliveriesComponent.prototype.onSubmit = function (delivery) {
        // Esorina ny []
        var objIdDeliverer = String(this.IdDeliverer).replace('[', '');
        var strIdDeliverer = objIdDeliverer.replace('"', '');
        var lastRemovedCharStrIdDeliverer = strIdDeliverer.replace(']', '');
        this.newStrIdDeliverer = lastRemovedCharStrIdDeliverer.replace('"', '');
        var data = {
            delivery_deliverer: this.newStrIdDeliverer
        };
        this.deliveryService
            .putDelivery(data, String(delivery._id))
            .subscribe(function (res) {
            //Doesn't work
            console.log('-- UPDATE DELIVERY SUCCEEDED --');
        });
        this.refreshPage();
    };
    GetAllDeliveriesComponent.prototype.refreshPage = function () {
        var _this = this;
        //Refresh page in order to add dishes in order-line-components
        this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            var url = 'delivererAdminMenu-ekaly';
            _this._router
                .navigateByUrl('/', {
                skipLocationChange: true
            })
                .then(function () {
                _this._router.navigate([url]);
            });
        });
    };
    GetAllDeliveriesComponent = __decorate([
        core_1.Component({
            selector: 'app-get-all-deliveries',
            templateUrl: './get-all-deliveries.component.html',
            styleUrls: ['./get-all-deliveries.component.css']
        })
    ], GetAllDeliveriesComponent);
    return GetAllDeliveriesComponent;
}());
exports.GetAllDeliveriesComponent = GetAllDeliveriesComponent;
