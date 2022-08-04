"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DelivererAdminMenuComponent = void 0;
var core_1 = require("@angular/core");
var DelivererAdminMenuComponent = /** @class */ (function () {
    function DelivererAdminMenuComponent(_router) {
        this._router = _router;
        this.IdDeliverer = localStorage.getItem('IdDeliverer');
    }
    DelivererAdminMenuComponent.prototype.ngOnInit = function () {
        if (this.IdDeliverer == null ||
            this.IdDeliverer == undefined ||
            this.IdDeliverer == '' ||
            this.IdDeliverer == 'null') {
            this._router.navigateByUrl('/loginServiceDelivery-ekaly');
        }
        else {
            this._router.navigateByUrl('/delivererAdminMenu-ekaly');
        }
    };
    DelivererAdminMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-deliverer-admin-menu',
            templateUrl: './deliverer-admin-menu.component.html',
            styleUrls: ['./deliverer-admin-menu.component.css']
        })
    ], DelivererAdminMenuComponent);
    return DelivererAdminMenuComponent;
}());
exports.DelivererAdminMenuComponent = DelivererAdminMenuComponent;
