"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InsertDishesComponent = void 0;
var core_1 = require("@angular/core");
var id_restaurant;
var dishes_name;
var dishes_desc;
var dishes_price;
var InsertDishesComponent = /** @class */ (function () {
    function InsertDishesComponent(_Activatedroute, dishesService) {
        this._Activatedroute = _Activatedroute;
        this.dishesService = dishesService;
        this.IdRestaurant = localStorage.getItem('IdRestaurant');
        this.objIdRestaurant = String(this.IdRestaurant).replace('[', '');
        this.strIdRestaurant = this.objIdRestaurant.replace('"', '');
        this.lastRemovedCharStrIdRestaurant = this.strIdRestaurant.replace(']', '');
        this.newStrIdRestaurant = this.lastRemovedCharStrIdRestaurant.replace('"', '');
    }
    InsertDishesComponent.prototype.ngOnInit = function () {
        this.refreshDishesList();
    };
    InsertDishesComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.dishesService.selectedDishes = {
            _id: '',
            id_restaurant: '',
            dishes_name: '',
            dishes_desc: '',
            dishes_price: 0
        };
    };
    InsertDishesComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(this.dishesService.selectedDishes.id_restaurant);
        console.log(this.dishesService.selectedDishes.dishes_name);
        console.log(this.dishesService.selectedDishes.dishes_desc);
        console.log(this.dishesService.selectedDishes.dishes_price);
        if (this.dishesService.selectedDishes.dishes_name == '' ||
            this.dishesService.selectedDishes.dishes_name == undefined) {
            console.log('Veuillez remplir dishes_name');
        }
        else if (this.dishesService.selectedDishes.dishes_desc == '' ||
            this.dishesService.selectedDishes.dishes_desc == undefined) {
            console.log('Veuillez remplir dishes_desc');
        }
        else if (this.dishesService.selectedDishes.dishes_price == null ||
            this.dishesService.selectedDishes.dishes_price == 0 ||
            this.dishesService.selectedDishes.dishes_price == undefined) {
            console.log('Veuillez remplir dishes_price');
        }
        else {
            console.log('okaaayyy eee===' +
                JSON.stringify(this.dishesService.selectedDishes._id));
            if (this.dishesService.selectedDishes._id == '' ||
                this.dishesService.selectedDishes._id == undefined) {
                var data = {
                    id_restaurant: this.newStrIdRestaurant,
                    dishes_name: this.dishesService.selectedDishes.dishes_name,
                    dishes_desc: this.dishesService.selectedDishes.dishes_desc,
                    dishes_price: this.dishesService.selectedDishes.dishes_price
                };
                this.dishesService.postDishes(data).subscribe(function (res) {
                    console.log('-- INSERT DISHES SUCCEEDED --');
                    _this.resetForm(form);
                    _this.refreshDishesList();
                });
                console.log('INSERT {[Dishes]} OK');
            }
            else {
                this.dishesService
                    .putDishes(form === null || form === void 0 ? void 0 : form.value, this.dishesService.selectedDishes._id)
                    .subscribe(function (res) {
                    //Doesn't work
                    console.log('-- UPDATE DISHES SUCCEEDED --');
                    _this.resetForm(form);
                    _this.refreshDishesList();
                });
                console.log('UPDATE {[Dishes]} OK');
            }
        }
    };
    InsertDishesComponent.prototype.refreshDishesList = function () {
        var _this = this;
        this.dishesService.getDishesByRestaurant(this.newStrIdRestaurant).subscribe(function (res) {
            _this.dishesService.dishes = res;
        });
    };
    InsertDishesComponent.prototype.onEdit = function (dishes) {
        // console.log('DISHES ::'+ JSON.stringify(this.dishesService.selectedDishes)); //Tsisy raha ato
        this.dishesService.selectedDishes = dishes;
    };
    InsertDishesComponent.prototype.search = function (form) {
        var _this = this;
        // console.log(form?.value.dishes_name_search);
        if ((form === null || form === void 0 ? void 0 : form.value.dishes_name_search) == '' ||
            (form === null || form === void 0 ? void 0 : form.value.dishes_name_search) == undefined) {
            // console.log("REFRESY");
            this.refreshDishesList();
        }
        else {
            this.dishesService
                .GetDishesByDishesName(String(this.dishesService.selectedDishes.dishes_name_search))
                .subscribe(function (res) {
                _this.dishesService.dishes = res;
                // console.log("okaaayyy eee==="+JSON.stringify(this.restaurantService.selectedRestaurant));
            });
        }
    };
    InsertDishesComponent = __decorate([
        core_1.Component({
            selector: 'app-insert-dishes',
            templateUrl: './insert-dishes.component.html',
            styleUrls: ['./insert-dishes.component.css']
        })
    ], InsertDishesComponent);
    return InsertDishesComponent;
}());
exports.InsertDishesComponent = InsertDishesComponent;
