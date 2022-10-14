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
exports.RestaurantLoginComponent = void 0;
var core_1 = require("@angular/core");
var RestaurantLoginComponent = /** @class */ (function () {
    function RestaurantLoginComponent(_router, restaurantService) {
        this._router = _router;
        this.restaurantService = restaurantService;
    }
    RestaurantLoginComponent.prototype.ngOnInit = function () {
        // Remove LocalStorage.getItem('IdRestaurant')
        localStorage.removeItem('IdRestaurant');
        localStorage.removeItem('restaurant_name');
    };
    RestaurantLoginComponent.prototype.GetRestaurantByEmailAndPassword = function (form) {
        var _this = this;
        // this.obj = JSON.parse(String(this.panier));
        this.restaurantService
            .GetRestaurantByEmailAndPassword(String(this.restaurantService.selectedRestaurant.restaurant_email), String(this.restaurantService.selectedRestaurant.restaurant_password))
            .subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
            var IdRestaurant, restaurant_name, restaurant_email, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.restaurantService.restaurants = res;
                        console.log('RESPONSA = ' + JSON.stringify(this.restaurantService.restaurants));
                        if (!(this.restaurantService.restaurants.length != 0)) return [3 /*break*/, 2];
                        IdRestaurant = this.restaurantService.restaurants.map(function (restaurant) { return restaurant._id; });
                        restaurant_name = this.restaurantService.restaurants.map(function (restaurant) { return restaurant.restaurant_name; });
                        restaurant_email = this.restaurantService.restaurants.map(function (restaurant) { return restaurant.restaurant_email; });
                        console.log('IdRestaurant  == ' + IdRestaurant);
                        console.log('restaurant_name  == ' + restaurant_name);
                        console.log('restaurant_email  == ' + restaurant_email);
                        url = '/restaurantAdminMenu-ekaly/' + IdRestaurant;
                        localStorage.setItem('restaurant_name', JSON.stringify(restaurant_name));
                        localStorage.setItem('IdRestaurant', JSON.stringify(IdRestaurant));
                        return [4 /*yield*/, this._router.navigateByUrl(url)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.resetLogin();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    RestaurantLoginComponent.prototype.resetLogin = function (form) {
        if (form)
            form.reset();
        this.restaurantService.selectedRestaurant = {
            _id: '',
            restaurant_email: '',
            restaurant_password: ''
        };
        this.loginError =
            "L'adresse email ou le mots de passe ne correspond pas à un compte restaurant de e-kaly";
    };
    RestaurantLoginComponent = __decorate([
        core_1.Component({
            selector: 'app-restaurant-login',
            templateUrl: './restaurant-login.component.html',
            styleUrls: ['./restaurant-login.component.css']
        })
    ], RestaurantLoginComponent);
    return RestaurantLoginComponent;
}());
exports.RestaurantLoginComponent = RestaurantLoginComponent;
