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
var restaurant_id;
var DishesComponent = /** @class */ (function () {
    function DishesComponent(dishesService) {
        this.dishesService = dishesService;
    }
    DishesComponent.prototype.ngOnInit = function () {
        this.refreshDishesList();
    };
    DishesComponent.prototype.refreshDishesList = function () {
        var _this = this;
        this.dishesService.getDishesList().subscribe(function (res) {
            _this.dishesService.dishes = res;
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
