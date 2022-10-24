"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DishesComponent = void 0;
var core_1 = require("@angular/core");
var dishes_service_1 = require("../shared/dishes.service");
var drag_drop_1 = require("@angular/cdk/drag-drop");
var DishesComponent = /** @class */ (function () {
    // totalPrice!: number;
    // obj!: any;
    // nbDishes!: any;
    // panier = localStorage.getItem('panier');
    // cart!:any;
    function DishesComponent(_Activatedroute, dishesService, restaurantService, cartService, _router) {
        this._Activatedroute = _Activatedroute;
        this.dishesService = dishesService;
        this.restaurantService = restaurantService;
        this.cartService = cartService;
        this._router = _router;
    }
    DishesComponent.prototype.addToCart = function (dishes) {
        var _this = this;
        this.cartService.addToCart(dishes);
        // window.alert(dishes.dishes_name + ' ajouté dans le panier!');
        //Refresh page in order to add dishes in order-line-components
        this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            var url = 'dishes/restaurant/' + (params === null || params === void 0 ? void 0 : params.get('id_restaurant'));
            _this._router
                .navigateByUrl('/', {
                skipLocationChange: true
            })
                .then(function () {
                _this._router.navigate([url]);
            });
        });
    };
    DishesComponent.prototype.ngOnInit = function () {
        // this.obj = JSON.parse(String(this.panier));
        // console.log(this.obj);
        // this.sum();
        // if (
        //   this.obj == null ||
        //   this.obj == undefined ||
        //   this.obj == '' ||
        //   this.obj == '[]'
        // ) {
        //   this.nbDishes = 0;
        //   this.totalPrice = 0;
        // } else {
        //   this.nbDishes = this.obj.length;
        //   this.totalPrice = this.totalPrice;
        // }
        this.getAllDishesByRestaurant();
        this.getRestaurantByIdRestaurant();
    };
    DishesComponent.prototype.refreshDishesList = function () {
        var _this = this;
        this.dishesService.getDishesList().subscribe(function (res) {
            _this.dishesService.dishes = res;
        });
    };
    DishesComponent.prototype.getAllDishesByRestaurant = function () {
        var _this = this;
        this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.dishesService
                .getDishesByRestaurant(params === null || params === void 0 ? void 0 : params.get('id_restaurant'))
                .subscribe(function (res) {
                _this.dishesService.dishes = res;
            });
        });
    };
    DishesComponent.prototype.getRestaurantByIdRestaurant = function () {
        var _this = this;
        this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.restaurantService
                .getRestaurantByIdRestaurant(params === null || params === void 0 ? void 0 : params.get('id_restaurant'))
                .subscribe(function (res) {
                _this.restaurantService.selectedRestaurant = res;
            });
        });
    };
    DishesComponent.prototype.drop = function (event) {
        drag_drop_1.moveItemInArray(this.dishesService.dishes, event.previousIndex, event.currentIndex);
    };
    DishesComponent.prototype.orderPage = function () {
        this._router.navigateByUrl('/order');
    };
    DishesComponent = __decorate([
        core_1.Component({
            selector: 'app-dishes',
            templateUrl: './dishes.component.html',
            styleUrls: ['./dishes.component.css'],
            providers: [dishes_service_1.DishesService]
        })
    ], DishesComponent);
    return DishesComponent;
}());
exports.DishesComponent = DishesComponent;
