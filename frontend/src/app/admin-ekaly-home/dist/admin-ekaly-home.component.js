"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminEkalyHomeComponent = void 0;
var core_1 = require("@angular/core");
var AdminEkalyHomeComponent = /** @class */ (function () {
    function AdminEkalyHomeComponent(_router) {
        this._router = _router;
        this.IdUserAdmin = localStorage.getItem('IdUserAdmin');
    }
    AdminEkalyHomeComponent.prototype.ngOnInit = function () {
        if (this.IdUserAdmin == null ||
            this.IdUserAdmin == undefined ||
            this.IdUserAdmin == '' ||
            this.IdUserAdmin == 'null') {
            this._router.navigateByUrl('/admin1234');
        }
        else {
            var objIdUserAdmin = String(this.IdUserAdmin).replace('[', '');
            var strIdUserAdmin = objIdUserAdmin.replace('"', '');
            var lastRemovedCharStrIdUserAdmin = strIdUserAdmin.replace(']', '');
            this.newStrIdUserAdmin = lastRemovedCharStrIdUserAdmin.replace('"', '');
            this._router.navigateByUrl('/admin1234-home');
        }
    };
    AdminEkalyHomeComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-ekaly-home',
            templateUrl: './admin-ekaly-home.component.html',
            styleUrls: ['./admin-ekaly-home.component.css']
        })
    ], AdminEkalyHomeComponent);
    return AdminEkalyHomeComponent;
}());
exports.AdminEkalyHomeComponent = AdminEkalyHomeComponent;
