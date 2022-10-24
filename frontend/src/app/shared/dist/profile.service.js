"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProfileService = void 0;
var core_1 = require("@angular/core");
var profile_model_1 = require("./profile.model");
var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.selectedProfile = new profile_model_1.Profile();
        this.profiles = [];
        this.baseURL = 'https://m1p9mean-antenaina-backend.herokuapp.com/profiles';
    }
    ProfileService.prototype.postProfile = function (profile) {
        return this.http.post(this.baseURL, profile);
    };
    ProfileService.prototype.getProfileList = function () {
        return this.http.get(this.baseURL);
    };
    ProfileService.prototype.getProfileByIdProfile = function (id_profile) {
        return this.http.get(this.baseURL + "/" + id_profile);
    };
    ProfileService.prototype.GetProfileByProfileName = function (profile_name) {
        return this.http.get(this.baseURL + "/GetProfileByProfileName/" + profile_name);
    };
    ProfileService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;
