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
    function GetAllOrdersByRestaurantComponent(_Activatedroute, orderService, _router) {
        this._Activatedroute = _Activatedroute;
        this.orderService = orderService;
        this._router = _router;
        this.IdRestaurant = localStorage.getItem('IdRestaurant');
        this.show = false;
    }
    GetAllOrdersByRestaurantComponent.prototype.ngOnInit = function () {
        this.GetAllOrderByRestaurant();
    };
    GetAllOrdersByRestaurantComponent.prototype.GetAllOrderByRestaurant = function () {
        var _this = this;
        // Erase []
        var objIdRestaurant = String(this.IdRestaurant).replace('[', '');
        var strIdRestaurant = objIdRestaurant.replace('"', '');
        var lastRemovedCharStrIdRestaurant = strIdRestaurant.replace(']', '');
        this.newStrIdRestaurant = lastRemovedCharStrIdRestaurant.replace('"', '');
        console.log('newStrIdRestaurant =' + this.newStrIdRestaurant);
        this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.orderService
                // .getOrdersByRestaurant(this.newStrIdRestaurant)
                .getOrdersByRestaurant(params === null || params === void 0 ? void 0 : params.get('id_restaurant'))
                .subscribe(function (res) {
                _this.orderService.order = res;
                // for (var i = 0; i < this.orderService.order.length; i++) {
                //   console.log("ORDER STATUS ="+ this.orderService.order[i].order_status)
                //   if (this.orderService.order[i].order_status == "COMMANDE ENVOYE") {
                //     this.show = true;
                //   } else if(this.orderService.order[i].order_status == "En cours de livraison"){
                //     this.show = false;
                //   }
                //   else if(this.orderService.order[i].order_status == "Commande livrée"){
                //     this.show = false;
                //   }
                // }
            });
        });
    };
    GetAllOrdersByRestaurantComponent.prototype.onSubmit = function (order) {
        var data = {
            order_status: 'En cours de livraison'
        };
        this.orderService.putOrder(data, String(order._id)).subscribe(function (res) {
            console.log('-- UPDATE ORDER SUCCEEDED --');
        });
        this.refreshPage();
    };
    // Voir details
    GetAllOrdersByRestaurantComponent.prototype.onClick = function (order) {
        var _this = this;
        this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            var url = 'GetOrderByIdOrderAdmin/' + String(order._id);
            _this._router
                .navigateByUrl('/', {
                skipLocationChange: true
            })
                .then(function () {
                _this._router.navigate([url]);
            });
        });
    };
    GetAllOrdersByRestaurantComponent.prototype.refreshPage = function () {
        var _this = this;
        //Refresh page in order to add dishes in order-line-components
        this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            var url = 'restaurantAdminMenu-ekaly/' + (params === null || params === void 0 ? void 0 : params.get('id_restaurant'));
            _this._router
                .navigateByUrl('/', {
                skipLocationChange: true
            })
                .then(function () {
                _this._router.navigate([url]);
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
