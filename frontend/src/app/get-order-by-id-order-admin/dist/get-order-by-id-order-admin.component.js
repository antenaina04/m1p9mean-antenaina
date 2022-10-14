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
exports.GetOrderByIdOrderAdminComponent = void 0;
var core_1 = require("@angular/core");
var GetOrderByIdOrderAdminComponent = /** @class */ (function () {
    function GetOrderByIdOrderAdminComponent(_Activatedroute, orderService, restaurantService, userService, orderDetailsService, dishesService, deliveryService) {
        this._Activatedroute = _Activatedroute;
        this.orderService = orderService;
        this.restaurantService = restaurantService;
        this.userService = userService;
        this.orderDetailsService = orderDetailsService;
        this.dishesService = dishesService;
        this.deliveryService = deliveryService;
    }
    GetOrderByIdOrderAdminComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.GetOrderByIdOrder();
                // this.GetRestaurantByIdRestaurant(this.RestaurantID);
                // this.GetUserByIdUser(this.UserID);
                this.GetOrderDetailsByIdOrder();
                this.GetDeliveryByIdOrder();
                return [2 /*return*/];
            });
        });
    };
    GetOrderByIdOrderAdminComponent.prototype.GetOrderByIdOrder = function () {
        var _this = this;
        this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.orderService
                // .getOrdersByRestaurant(this.newStrIdRestaurant)
                .GetOrderByIdOrder(params === null || params === void 0 ? void 0 : params.get('id_order'))
                .subscribe(function (res) {
                _this.orderService.order = res;
                _this.UserID = String(res.id_user); //Affichage UserID
                _this.RestaurantID = String(res.id_restaurant); //Affichage RestaurantID
                _this.OrderStatus = String(res.order_status); //Affichage OrderStatus
                _this.OrderPrice = String(res.order_price); //Affichage OrderPrice
                _this.OrderDate = String(res.created_at); //Affichage OrderDate
                _this.TotalAmountToPay = String(res.total_amount_to_pay);
                console.log("this.RestaurantID = " + _this.RestaurantID);
                _this.total_amount_to_pay = String(res.total_amount_to_pay);
                _this.GetRestaurantByIdRestaurant(_this.RestaurantID);
                _this.GetUserByIdUser(_this.UserID);
            });
        });
    };
    GetOrderByIdOrderAdminComponent.prototype.GetRestaurantByIdRestaurant = function (id_restaurant) {
        var _this = this;
        this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.restaurantService
                .getRestaurantByIdRestaurant(id_restaurant)
                .subscribe(function (res) {
                _this.restaurantService.restaurants = res;
                _this.restaurant_name = String(res.restaurant_name); //Affichage restaurant_name
                _this.restaurant_location = String(res.restaurant_location); //Affichage restaurant_location
                _this.restaurant_phone = String(res.restaurant_phone); //Affichage restaurant_phone
            });
        });
    };
    GetOrderByIdOrderAdminComponent.prototype.GetUserByIdUser = function (id_user) {
        var _this = this;
        this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.userService.GetUserByIdUser(id_user).subscribe(function (res) {
                _this.userService.users = res;
                _this.name = String(res.name); //Affichage name
                _this.email = String(res.email); //Affichage email
                _this.phone = String(res.phone); //Affichage phone
            });
        });
    };
    // GetDishesPriceByIdDishes(id_dishes: string) {
    //   this.sub = this._Activatedroute.paramMap.subscribe((params) => {
    //     this.dishesService
    //       .getDishesByIdDishes(String(id_dishes))
    //       .subscribe((res) => {
    //         this.dishesService.dishes = res as Dishes[];
    //         this.dishesPriceResult1 = res.dishes_price;
    //         console.log('eto pory =' + this.dishesPriceResult1);
    //       });
    //   });
    //   return this.dishesPriceResult1;
    // }
    GetOrderByIdOrderAdminComponent.prototype.GetOrderDetailsByIdOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
                    _this.orderDetailsService
                        .getOrderDetailsByIdOrder(params === null || params === void 0 ? void 0 : params.get('id_order'))
                        .subscribe(function (res) {
                        _this.orderDetailsService.orderDetails = res;
                        var Obj;
                        var ObjList = new Array();
                        for (var i = 0; i < _this.orderDetailsService.orderDetails.length; i++) {
                            _this.id_dishes = _this.orderDetailsService.orderDetails[i].id_dishes;
                            _this.sub = _this._Activatedroute.paramMap.subscribe(function (params) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    -this.dishesService
                                        .getDishesByIdDishes(this.id_dishes)
                                        .subscribe(function (res) {
                                        _this.dishesService;
                                        _this.dishesService.dishes = res;
                                        // Create Obj
                                        Obj = {
                                            dishes_name: res.dishes_name,
                                            dishes_desc: res.dishes_desc,
                                            dishes_price: res.dishes_price
                                        };
                                        if (Array.isArray(ObjList)) {
                                            ObjList.push(Obj); // this will work fine
                                        }
                                        else {
                                            console.log('ObjList is not an array!');
                                        }
                                        _this.ObjectList = ObjList;
                                    });
                                    return [2 /*return*/];
                                });
                            }); });
                        }
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    GetOrderByIdOrderAdminComponent.prototype.GetDeliveryByIdOrder = function () {
        // this.sub = this._Activatedroute.paramMap.subscribe(  (params) => {
        //   this.deliveryService
        //     // .getOrdersByRestaurant(this.newStrIdRestaurant)
        //     .GetDeliveryByOrderId(params?.get('id_order'))
        //     .subscribe((res) => {
        //       this.deliveryService.delivery = res as Delivery[];
        //       this.Delivery_deliverer = String(res.delivery_deliverer); 
        //       this.Delivery_location = String(res.delivery_location); 
        //       this.Delivery_price = String(res.delivery_price); 
        //       this.Delivery_count = String(res.delivery_count);
        var _this = this;
        //       console.log("Delivery =" + this.Delivery_location);
        //       console.log("this.Delivery_deliverer =" + this.Delivery_deliverer);
        //       console.log("this.Delivery_location =" + this.Delivery_location);
        //       console.log("this.Delivery_price =" + this.Delivery_price);
        //       console.log("this.Delivery_count =" + this.Delivery_count);
        //     });
        // });
        this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.deliveryService
                // .getOrdersByRestaurant(this.newStrIdRestaurant)
                .GetDeliveryByOrderId(params === null || params === void 0 ? void 0 : params.get('id_order'))
                .subscribe(function (res) {
                _this.deliveryService.delivery = res;
                _this.Delivery_deliverer = String(res.delivery_deliverer);
                _this.Delivery_location = String(res.delivery_location);
                _this.Delivery_price = String(res.delivery_price);
                _this.Delivery_count = String(res.delivery_count);
                _this.Delivery_date = String(res.delivery_date);
            });
        });
    };
    GetOrderByIdOrderAdminComponent = __decorate([
        core_1.Component({
            selector: 'app-get-order-by-id-order-admin',
            templateUrl: './get-order-by-id-order-admin.component.html',
            styleUrls: ['./get-order-by-id-order-admin.component.css']
        })
    ], GetOrderByIdOrderAdminComponent);
    return GetOrderByIdOrderAdminComponent;
}());
exports.GetOrderByIdOrderAdminComponent = GetOrderByIdOrderAdminComponent;
