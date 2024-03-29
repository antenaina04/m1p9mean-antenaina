"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var user_component_1 = require("./user/user.component");
var login_component_1 = require("./login/login.component");
var order_page_component_1 = require("./order-page/order-page.component");
var order_line_component_1 = require("./order-line/order-line.component");
// import { ProfileComponent } from './profile/profile.component';
var insert_dishes_component_1 = require("./insert-dishes/insert-dishes.component");
var insert_restaurant_component_1 = require("./insert-restaurant/insert-restaurant.component");
var about_us_component_1 = require("./about-us/about-us.component");
var contact_us_component_1 = require("./contact-us/contact-us.component");
// import { RestaurantComponent } from './restaurant/restaurant.component';
// import { DishesComponent } from './dishes/dishes.component';
var drag_drop_1 = require("@angular/cdk/drag-drop");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                user_component_1.UserComponent,
                // RestaurantComponent,
                // DishesComponent
                app_routing_module_1.routingComponents,
                login_component_1.LoginComponent,
                order_page_component_1.OrderPageComponent,
                order_line_component_1.OrderLineComponent,
                // ProfileComponent,
                insert_dishes_component_1.InsertDishesComponent,
                insert_restaurant_component_1.InsertRestaurantComponent,
                about_us_component_1.AboutUsComponent,
                contact_us_component_1.ContactUsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                drag_drop_1.DragDropModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
