"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ServiceDeliveryLoginComponent = void 0;
var core_1 = require("@angular/core");
var ServiceDeliveryLoginComponent = /** @class */ (function () {
    function ServiceDeliveryLoginComponent(_router, delivererService) {
        this._router = _router;
        this.delivererService = delivererService;
    }
    ServiceDeliveryLoginComponent.prototype.ngOnInit = function () { };
    ServiceDeliveryLoginComponent.prototype.GetDelivererByEmailAndPassword = function (form) {
        var _this = this;
        // this.obj = JSON.parse(String(this.panier));
        this.delivererService
            .GetDelivererByEmailAndPassword(String(this.delivererService.selectedDeliverer.deliverer_email), String(this.delivererService.selectedDeliverer.deliverer_password))
            .subscribe(function (res) {
            _this.delivererService.deliverers = res;
            console.log('RESPONSA = ' + JSON.stringify(_this.delivererService.deliverers));
            if (_this.delivererService.deliverers.length != 0) {
                var IdDeliverer = _this.delivererService.deliverers.map(function (deliverer) { return deliverer._id; });
                var deliverer_name = _this.delivererService.deliverers.map(function (deliverer) { return deliverer.deliverer_name; });
                var deliverer_email = _this.delivererService.deliverers.map(function (deliverer) { return deliverer.deliverer_email; });
                console.log('IdDeliverer  == ' + IdDeliverer);
                console.log('deliverer_name  == ' + deliverer_name);
                console.log('deliverer_email  == ' + deliverer_email);
                //=> CreateSessions
                localStorage.setItem('deliverer_name', JSON.stringify(deliverer_name));
                localStorage.setItem('IdDeliverer', JSON.stringify(IdDeliverer));
                _this._router.navigateByUrl('/delivererAdminMenu-ekaly');
            }
            // => If there is an error on login
            else {
                _this.resetLogin();
            }
        });
    };
    ServiceDeliveryLoginComponent.prototype.resetLogin = function (form) {
        if (form)
            form.reset();
        this.delivererService.selectedDeliverer = {
            _id: '',
            deliverer_email: '',
            deliverer_password: ''
        };
        this.loginError =
            "L'adresse email ou le mots de passe ne correspond pas à un compte livreur de e-kaly";
    };
    ServiceDeliveryLoginComponent = __decorate([
        core_1.Component({
            selector: 'app-service-delivery-login',
            templateUrl: './service-delivery-login.component.html',
            styleUrls: ['./service-delivery-login.component.css']
        })
    ], ServiceDeliveryLoginComponent);
    return ServiceDeliveryLoginComponent;
}());
exports.ServiceDeliveryLoginComponent = ServiceDeliveryLoginComponent;
