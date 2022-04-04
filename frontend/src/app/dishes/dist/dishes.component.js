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
var dishes_name;
var dishes_desc;
var dishes_price;
// let restaurant_id: string;
var DishesComponent = /** @class */ (function () {
    function DishesComponent(_Activatedroute, _router, dishesService) {
        this._Activatedroute = _Activatedroute;
        this._router = _router;
        this.dishesService = dishesService;
    }
    DishesComponent.prototype.ngOnInit = function () {
        this.getAllDishesByRestaurant();
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
            console.log('Paramsa = ' + JSON.stringify(params));
            console.log('ILAY ID TADIAVINA TSY METY MIVOAKA = ' + (params === null || params === void 0 ? void 0 : params.get('id_restaurant')));
            _this.dishesService
                .getDishesByRestaurant(params === null || params === void 0 ? void 0 : params.get('id_restaurant'))
                .subscribe(function (res) {
                _this.dishesService.dishes = res;
            });
        });
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
