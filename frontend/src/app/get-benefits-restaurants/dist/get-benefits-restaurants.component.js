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
exports.GetBenefitsRestaurantsComponent = void 0;
var core_1 = require("@angular/core");
var GetBenefitsRestaurantsComponent = /** @class */ (function () {
    function GetBenefitsRestaurantsComponent(orderService, deliveryService, restaurantService, _Activatedroute, _router) {
        this.orderService = orderService;
        this.deliveryService = deliveryService;
        this.restaurantService = restaurantService;
        this._Activatedroute = _Activatedroute;
        this._router = _router;
    }
    GetBenefitsRestaurantsComponent.prototype.ngOnInit = function () {
        this.GetOrder();
    };
    GetBenefitsRestaurantsComponent.prototype.GetOrder = function () {
        var _this = this;
        this.orderService.getOrderList().subscribe(function (res) {
            _this.orderService.order = res;
            var RESULT;
            var Obj;
            var ObjList = new Array();
            var _loop_1 = function (i) {
                _this.restaurant_id = String(_this.orderService.order[i].id_restaurant);
                _this.sub = _this._Activatedroute.paramMap.subscribe(function (params) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        this.restaurantService
                            .getRestaurantByIdRestaurant(this.restaurant_id)
                            .subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                            var created_date, months, year, month, date, map;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.restaurantService;
                                        this.restaurantService.restaurants = res;
                                        created_date = new Date(this.orderService.order[i].created_at);
                                        months = [
                                            'janvier',
                                            'fevrier',
                                            'mars',
                                            'avril',
                                            'mai',
                                            'juin',
                                            'juillet',
                                            'août',
                                            'septembre',
                                            'octobre',
                                            'novembre',
                                            'decembre',
                                        ];
                                        year = created_date.getFullYear() + ' ';
                                        month = months[created_date.getMonth()] + ' ';
                                        date = created_date.getDate() + ' ';
                                        //  var hour = created_date.getHours()+'h';
                                        //  var min = created_date.getMinutes();
                                        //  var sec = created_date.getSeconds();
                                        // Create Obj
                                        Obj = {
                                            // order_date: this.orderService.order[i].created_at,
                                            order_date: date + month + year,
                                            restaurant_name: String(res.restaurant_name),
                                            order_price: parseInt(String(this.orderService.order[i].order_price)),
                                            benefits: parseInt(String(this.deliveryService.GetBenefits(parseInt(String(this.orderService.order[i].order_price)), 20)))
                                        };
                                        if (!Array.isArray(ObjList)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, ObjList.push(Obj)];
                                    case 1:
                                        _a.sent(); // this will work fine
                                        return [3 /*break*/, 3];
                                    case 2:
                                        console.log('ObjList is not an array!');
                                        _a.label = 3;
                                    case 3:
                                        map = ObjList === null || ObjList === void 0 ? void 0 : ObjList.reduce(function (prev, next) {
                                            if (next.restaurant_name in prev) {
                                                prev[next.restaurant_name].benefits += next.benefits;
                                                prev[next.restaurant_name].order_price += next.order_price;
                                            }
                                            else {
                                                prev[next.restaurant_name] = next;
                                            }
                                            return prev;
                                        }, {});
                                        RESULT = Object.keys(map).map(function (restaurant_name) { return map[restaurant_name]; });
                                        console.log('resultat =' + JSON.stringify(RESULT));
                                        this.ObjectList = RESULT;
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                    });
                }); });
            };
            for (var i = 0; i < _this.orderService.order.length; i++) {
                _loop_1(i);
            }
        });
    };
    GetBenefitsRestaurantsComponent = __decorate([
        core_1.Component({
            selector: 'app-get-benefits-restaurants',
            templateUrl: './get-benefits-restaurants.component.html',
            styleUrls: ['./get-benefits-restaurants.component.css']
        })
    ], GetBenefitsRestaurantsComponent);
    return GetBenefitsRestaurantsComponent;
}());
exports.GetBenefitsRestaurantsComponent = GetBenefitsRestaurantsComponent;
