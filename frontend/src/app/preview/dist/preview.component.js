"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.PreviewComponent = void 0;
var core_1 = require("@angular/core");
var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(_Activatedroute, deliveryService, restaurantService, userService, orderService, _router) {
        this._Activatedroute = _Activatedroute;
        this.deliveryService = deliveryService;
        this.restaurantService = restaurantService;
        this.userService = userService;
        this.orderService = orderService;
        this._router = _router;
        this.Username = localStorage.getItem('Username');
        this.IdUser = localStorage.getItem('IdUser');
        this.panier = localStorage.getItem('panier');
        //NgIF Error Message
        this.show = false;
    }
    PreviewComponent.prototype.ngOnInit = function () {
        if (this.Username == null ||
            this.Username == undefined ||
            this.Username == '' ||
            this.Username == 'null') {
            this._router.navigateByUrl('checkout');
        }
        else {
            this.obj = JSON.parse(String(this.panier));
            this.sum();
            this.GetUserByIdUser();
            this.GetAdressAndDateDelivery();
            this.GetRestaurantByIdRestaurant();
            this.GetAmountSummary();
            this.GetOrderDate();
        }
    };
    // GetUser
    PreviewComponent.prototype.GetUserByIdUser = function () {
        var _this = this;
        var objIdUser = String(this.IdUser).replace('[', '');
        var strIdUser = objIdUser.replace('"', '');
        var lastRemovedCharStrIdUser = strIdUser.replace(']', '');
        this.newStrIdUser = lastRemovedCharStrIdUser.replace('"', '');
        this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.userService.GetUserByIdUser(_this.newStrIdUser).subscribe(function (res) {
                _this.userService.selectedUser = res;
            });
        });
    };
    //GetRestaurant
    PreviewComponent.prototype.GetRestaurantByIdRestaurant = function () {
        var _this = this;
        if (this.obj) {
            this.obj.map(function (_dishes) {
                var id_restaurant = _dishes.id_restaurant;
                _this.sub = _this._Activatedroute.paramMap.subscribe(function () {
                    _this.restaurantService
                        .getRestaurantByIdRestaurant(id_restaurant)
                        .subscribe(function (res) {
                        _this.restaurantService.selectedRestaurant = res;
                    });
                });
            });
        }
    };
    PreviewComponent.prototype.GetAdressAndDateDelivery = function () {
        var _this = this;
        this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.delivery_adress = String('xxxx');
            var dateDelivery = new Date(String(params === null || params === void 0 ? void 0 : params.get('dateDelivery')));
            var date = dateDelivery.getDate() +
                '/' +
                (dateDelivery.getMonth() + 1) +
                '/' +
                dateDelivery.getFullYear();
            var time = dateDelivery.getHours() + 'h ' + dateDelivery.getMinutes() + 'min';
            var DateTimeDelivery = date + ' ' + time;
            _this.delivery_date = String('...');
        });
    };
    PreviewComponent.prototype.onBlurDeliveryDate = function () {
        var dateDelivery = new Date(String(this.deliveryService.selectedDelivery.delivery_date));
        var date = dateDelivery.getDate() +
            '/' +
            (dateDelivery.getMonth() + 1) +
            '/' +
            dateDelivery.getFullYear();
        var time = dateDelivery.getHours() + 'h ' + dateDelivery.getMinutes() + 'min';
        var DateTimeDelivery = date + ' ' + time;
        this.delivery_date = String(DateTimeDelivery);
        if (String(this.delivery_date) == 'NaN/NaN/NaN NaNh NaNmin' ||
            String(this.delivery_date) == '' ||
            String(this.delivery_date) == null ||
            String(this.delivery_date) == undefined) {
            this.delivery_date = '...';
        }
        else {
            this.delivery_date = this.delivery_date;
        }
    };
    PreviewComponent.prototype.sum = function () {
        var _this = this;
        this.totalPrice = 0;
        if (this.obj) {
            this.obj.map(function (_dishes) {
                var price = _dishes.dishes_price || 0;
                _this.totalPrice += price;
            });
        }
    };
    PreviewComponent.prototype.GetAmountSummary = function () {
        var initial_price = 4000;
        var Percentage = 50;
        this.Benefice = this.deliveryService.GetBenefits(initial_price, Percentage);
        this.DeliveryCount = this.deliveryService.DeliveryCount(this.obj.length);
        this.ShippingCost = this.deliveryService.GetShippingCost(initial_price, Percentage, this.DeliveryCount);
        this.TotalAmountToPay = this.deliveryService.GetTotalAmountToPay(this.totalPrice, this.ShippingCost);
    };
    PreviewComponent.prototype.GetOrderDate = function () {
        var today = new Date();
        var date = today.getDate() +
            '/' +
            (today.getMonth() + 1) +
            '/' +
            today.getFullYear();
        var time = today.getHours() + 'h ' + today.getMinutes() + 'min';
        var CurrentDate = date + ' ' + time;
        this.OrderDate = String(CurrentDate);
    };
    PreviewComponent.prototype.onSubmitOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ErrorMessage, data;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.deliveryService.selectedDelivery.delivery_location == undefined ||
                            this.deliveryService.selectedDelivery.delivery_location == null ||
                            this.deliveryService.selectedDelivery.delivery_location == '' ||
                            this.deliveryService.selectedDelivery.delivery_date == undefined ||
                            this.deliveryService.selectedDelivery.delivery_date == null ||
                            this.deliveryService.selectedDelivery.delivery_date == '')) return [3 /*break*/, 1];
                        this.show = true;
                        ErrorMessage = "Veuillez completer l'information de la livaison de votre commmande ! Merci.";
                        console.log(ErrorMessage);
                        return [3 /*break*/, 3];
                    case 1:
                        data = {
                            id_restaurant: this.restaurantService.selectedRestaurant._id,
                            id_user: this.newStrIdUser,
                            order_price: this.totalPrice,
                            cart: this.panier,
                            delivery_date: this.deliveryService.selectedDelivery.delivery_date,
                            delivery_location: this.deliveryService.selectedDelivery.delivery_location,
                            delivery_price: this.ShippingCost,
                            //New Data
                            delivery_count: this.DeliveryCount,
                            total_amount_to_pay: this.TotalAmountToPay,
                            dishes_count: this.obj.length
                        };
                        this.orderService.postOrder(data).subscribe(function (res) {
                            _this._router.navigateByUrl('orderList');
                        });
                        return [4 /*yield*/, localStorage.removeItem('panier')];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PreviewComponent = __decorate([
        core_1.Component({
            selector: 'app-preview',
            templateUrl: './preview.component.html',
            styleUrls: ['./preview.component.css']
        })
    ], PreviewComponent);
    return PreviewComponent;
}());
exports.PreviewComponent = PreviewComponent;
