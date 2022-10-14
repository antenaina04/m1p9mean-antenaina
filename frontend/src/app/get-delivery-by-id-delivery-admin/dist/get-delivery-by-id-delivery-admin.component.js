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
exports.GetDeliveryByIdDeliveryAdminComponent = void 0;
var core_1 = require("@angular/core");
var GetDeliveryByIdDeliveryAdminComponent = /** @class */ (function () {
    function GetDeliveryByIdDeliveryAdminComponent(_Activatedroute, orderService, restaurantService, userService, orderDetailsService, dishesService, deliveryService, _router) {
        this._Activatedroute = _Activatedroute;
        this.orderService = orderService;
        this.restaurantService = restaurantService;
        this.userService = userService;
        this.orderDetailsService = orderDetailsService;
        this.dishesService = dishesService;
        this.deliveryService = deliveryService;
        this._router = _router;
        this.IdDeliverer = localStorage.getItem('IdDeliverer');
    }
    GetDeliveryByIdDeliveryAdminComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.GetDeliveryByIdDelivery();
                return [2 /*return*/];
            });
        });
    };
    GetDeliveryByIdDeliveryAdminComponent.prototype.GetDeliveryByIdDelivery = function () {
        var _this = this;
        this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.deliveryService
                .GetDeliveryByIdDelivery(params === null || params === void 0 ? void 0 : params.get('id_delivery'))
                .subscribe(function (res) {
                _this.deliveryService.delivery = res;
                _this.Delivery_deliverer = String(res.delivery_deliverer);
                _this.Delivery_client = String(res.delivery_client);
                _this.Delivery_location = String(res.delivery_location);
                _this.Delivery_price = String(res.delivery_price);
                _this.Delivery_count = String(res.delivery_count);
                _this.Id_order = String(res.id_order);
                _this.Delivery_id = String(res._id);
                // console.log('this.Delivery_deliverer = ' + this.Delivery_deliverer);
                // console.log('this.Delivery_client = ' + this.Delivery_client);
                // console.log('this.Delivery_location = ' + this.Delivery_location);
                // console.log('this.Delivery_price = ' + this.Delivery_price);
                // console.log('this.Id_order = ' + this.Id_order);
                _this.GetOrderByIdOrder(_this.Id_order);
                _this.GetUserByIdUser(_this.Delivery_client);
                _this.GetOrderDetailsByIdOrder(_this.Id_order);
            });
        });
    };
    GetDeliveryByIdDeliveryAdminComponent.prototype.GetOrderByIdOrder = function (id_order) {
        var _this = this;
        this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.orderService.GetOrderByIdOrder(id_order).subscribe(function (res) {
                _this.orderService.order = res;
                _this.UserID = String(res.id_user);
                _this.RestaurantID = String(res.id_restaurant);
                _this.OrderStatus = String(res.order_status);
                _this.OrderPrice = String(res.order_price);
                _this.OrderDate = String(res.created_at);
                _this.TotalAmountToPay = String(res.total_amount_to_pay);
                _this.OrderID = String(res._id);
                // console.log('this.UserID = ' + this.UserID);
                // console.log('this.RestaurantID = ' + this.RestaurantID);
                // console.log('this.OrderStatus = ' + this.OrderStatus);
                // console.log('this.OrderPrice = ' + this.OrderPrice);
                // console.log('this.OrderDate = ' + this.OrderDate);
                // console.log('this.TotalAmountToPay = ' + this.TotalAmountToPay);
                _this.GetRestaurantByIdRestaurant(_this.RestaurantID);
            });
        });
    };
    GetDeliveryByIdDeliveryAdminComponent.prototype.GetUserByIdUser = function (id_user) {
        var _this = this;
        this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.userService.GetUserByIdUser(id_user).subscribe(function (res) {
                _this.userService.users = res;
                _this.name = String(res.name); //Affichage name
                _this.email = String(res.email); //Affichage email
                _this.phone = String(res.phone); //Affichage phone
                // console.log('this.name = ' + this.name);
                // console.log('this.email = ' + this.email);
                // console.log('this.phone = ' + this.phone);
            });
        });
    };
    GetDeliveryByIdDeliveryAdminComponent.prototype.GetRestaurantByIdRestaurant = function (id_restaurant) {
        var _this = this;
        this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            _this.restaurantService
                .getRestaurantByIdRestaurant(id_restaurant)
                .subscribe(function (res) {
                _this.restaurantService.restaurants = res;
                _this.restaurant_name = String(res.restaurant_name);
                _this.restaurant_location = String(res.restaurant_location);
                _this.restaurant_phone = String(res.restaurant_phone);
                // console.log('this.restaurant_name = ' + this.restaurant_name);
                // console.log('this.restaurant_location = ' + this.restaurant_location);
                // console.log('this.restaurant_phone = ' + this.restaurant_phone);
            });
        });
    };
    GetDeliveryByIdDeliveryAdminComponent.prototype.GetOrderDetailsByIdOrder = function (id_order) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
                    _this.orderDetailsService
                        .getOrderDetailsByIdOrder(String(id_order))
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
    GetDeliveryByIdDeliveryAdminComponent.prototype.returnPage = function () {
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
    GetDeliveryByIdDeliveryAdminComponent.prototype.onSubmit = function (delivery_id) {
        // Esorina ny []
        var objIdDeliverer = String(this.IdDeliverer).replace('[', '');
        var strIdDeliverer = objIdDeliverer.replace('"', '');
        var lastRemovedCharStrIdDeliverer = strIdDeliverer.replace(']', '');
        this.newStrIdDeliverer = lastRemovedCharStrIdDeliverer.replace('"', '');
        var data = {
            delivery_deliverer: this.newStrIdDeliverer
        };
        //Send delivery.id_order**Update-Orderstatus
        this.deliveryService
            .putDelivery(data, String(delivery_id))
            .subscribe(function (res) {
            console.log('-- UPDATE DELIVERY SUCCEEDED --');
        });
        // Update order_status
        var data2 = {
            order_status: 'Commande livrée'
        };
        this.orderService.putOrder(data2, String(this.OrderID)).subscribe(function (res) {
            console.log('-- UPDATE ORDER SUCCEEDED --');
        });
        this.returnPage();
    };
    GetDeliveryByIdDeliveryAdminComponent = __decorate([
        core_1.Component({
            selector: 'app-get-delivery-by-id-delivery-admin',
            templateUrl: './get-delivery-by-id-delivery-admin.component.html',
            styleUrls: ['./get-delivery-by-id-delivery-admin.component.css']
        })
    ], GetDeliveryByIdDeliveryAdminComponent);
    return GetDeliveryByIdDeliveryAdminComponent;
}());
exports.GetDeliveryByIdDeliveryAdminComponent = GetDeliveryByIdDeliveryAdminComponent;
