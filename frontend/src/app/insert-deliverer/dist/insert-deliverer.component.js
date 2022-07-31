"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InsertDelivererComponent = void 0;
var core_1 = require("@angular/core");
var InsertDelivererComponent = /** @class */ (function () {
    function InsertDelivererComponent(_Activatedroute, delivererService) {
        this._Activatedroute = _Activatedroute;
        this.delivererService = delivererService;
    }
    InsertDelivererComponent.prototype.ngOnInit = function () {
    };
    InsertDelivererComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.delivererService.selectedDeliverer = {
            _id: '',
            deliverer_name: '',
            deliverer_email: '',
            deliverer_phone: '',
            deliverer_password: ''
        };
    };
    InsertDelivererComponent.prototype.onSubmit = function (form) {
        var _this = this;
        // console.log(this.delivererService.selectedDeliverer.restaurant_name);
        // console.log(this.delivererService.selectedDeliverer.restaurant_location);
        // console.log(this.delivererService.selectedDeliverer.restaurant_phone);
        if (this.delivererService.selectedDeliverer.deliverer_name == '' ||
            this.delivererService.selectedDeliverer.deliverer_name == undefined) {
            console.log('Veuillez remplir deliverer_name');
        }
        else if (this.delivererService.selectedDeliverer.deliverer_email == '' ||
            this.delivererService.selectedDeliverer.deliverer_email == undefined) {
            console.log('Veuillez remplir deliverer_email');
        }
        else if (this.delivererService.selectedDeliverer.deliverer_phone == null ||
            this.delivererService.selectedDeliverer.deliverer_phone == undefined) {
            console.log('Veuillez remplir deliverer_phone');
        }
        else if (this.delivererService.selectedDeliverer.deliverer_password == null ||
            this.delivererService.selectedDeliverer.deliverer_password == undefined) {
            console.log('Veuillez remplir deliverer_password');
        }
        else {
            console.log('okaaayyy eee===' +
                JSON.stringify(this.delivererService.selectedDeliverer._id));
            this.delivererService.postDeliverer(form === null || form === void 0 ? void 0 : form.value).subscribe(function (res) {
                console.log('-- INSERT DELIVERER SUCCEEDED --');
                _this.resetForm(form);
            });
            console.log('INSERT {[Deliverer]} OK');
        }
    };
    InsertDelivererComponent = __decorate([
        core_1.Component({
            selector: 'app-insert-deliverer',
            templateUrl: './insert-deliverer.component.html',
            styleUrls: ['./insert-deliverer.component.css']
        })
    ], InsertDelivererComponent);
    return InsertDelivererComponent;
}());
exports.InsertDelivererComponent = InsertDelivererComponent;
