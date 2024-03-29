"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.routingComponents = exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var restaurant_component_1 = require("./restaurant/restaurant.component");
var dishes_component_1 = require("./dishes/dishes.component");
var user_component_1 = require("./user/user.component");
var login_component_1 = require("./login/login.component");
var order_page_component_1 = require("./order-page/order-page.component");
var insert_dishes_component_1 = require("./insert-dishes/insert-dishes.component");
var insert_restaurant_component_1 = require("./insert-restaurant/insert-restaurant.component");
var about_us_component_1 = require("./about-us/about-us.component");
var contact_us_component_1 = require("./contact-us/contact-us.component");
var checkout_component_1 = require("./checkout/checkout.component");
var delivery_component_1 = require("./delivery/delivery.component");
var preview_component_1 = require("./preview/preview.component");
var order_list_component_1 = require("./order-list/order-list.component");
var admin_menu_component_1 = require("./admin-menu/admin-menu.component");
var restaurant_login_component_1 = require("./restaurant-login/restaurant-login.component");
var service_delivery_login_component_1 = require("./service-delivery-login/service-delivery-login.component");
var insert_deliverer_component_1 = require("./insert-deliverer/insert-deliverer.component");
var restaurant_admin_menu_component_1 = require("./restaurant-admin-menu/restaurant-admin-menu.component");
var deliverer_admin_menu_component_1 = require("./deliverer-admin-menu/deliverer-admin-menu.component");
var get_order_by_id_order_admin_component_1 = require("./get-order-by-id-order-admin/get-order-by-id-order-admin.component");
var get_delivery_by_id_delivery_admin_component_1 = require("./get-delivery-by-id-delivery-admin/get-delivery-by-id-delivery-admin.component");
var get_order_by_user_component_1 = require("./get-order-by-user/get-order-by-user.component");
var login_ekaly_component_1 = require("./login-ekaly/login-ekaly.component");
var admin_ekaly_home_component_1 = require("./admin-ekaly-home/admin-ekaly-home.component");
var pagenotfound_component_1 = require("./pagenotfound/pagenotfound.component");
var routes = [
    { path: '', component: restaurant_component_1.RestaurantComponent },
    { path: 'restaurant', component: restaurant_component_1.RestaurantComponent },
    { path: 'dishes', component: dishes_component_1.DishesComponent },
    { path: 'dishes/restaurant/:id_restaurant', component: dishes_component_1.DishesComponent },
    { path: 'order', component: order_page_component_1.OrderPageComponent },
    { path: 'checkout', component: checkout_component_1.CheckoutComponent },
    { path: 'delivery', component: delivery_component_1.DeliveryComponent },
    { path: 'preview', component: preview_component_1.PreviewComponent },
    { path: 'orderList', component: order_list_component_1.OrderListComponent },
    { path: 'GetOrderByUser/:id_order', component: get_order_by_user_component_1.GetOrderByUserComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'saveOrUpdateDishes', component: insert_dishes_component_1.InsertDishesComponent },
    { path: 'adminMenu-ekaly', component: admin_menu_component_1.AdminMenuComponent },
    { path: 'loginRestaurant-ekaly', component: restaurant_login_component_1.RestaurantLoginComponent },
    { path: 'registerRestaurant-ekaly', component: insert_restaurant_component_1.InsertRestaurantComponent },
    { path: 'restaurantAdminMenu-ekaly/:id_restaurant', component: restaurant_admin_menu_component_1.RestaurantAdminMenuComponent },
    { path: 'GetOrderByIdOrderAdmin/:id_order', component: get_order_by_id_order_admin_component_1.GetOrderByIdOrderAdminComponent },
    { path: 'loginServiceDelivery-ekaly', component: service_delivery_login_component_1.ServiceDeliveryLoginComponent },
    { path: 'registerDeliverer-ekaly', component: insert_deliverer_component_1.InsertDelivererComponent },
    { path: 'delivererAdminMenu-ekaly', component: deliverer_admin_menu_component_1.DelivererAdminMenuComponent },
    { path: 'GetDeliveryByIdDeliveryAdmin/:id_delivery', component: get_delivery_by_id_delivery_admin_component_1.GetDeliveryByIdDeliveryAdminComponent },
    { path: 'aboutUs', component: about_us_component_1.AboutUsComponent },
    { path: 'contactUs', component: contact_us_component_1.ContactUsComponent },
    { path: 'admin1234', component: login_ekaly_component_1.LoginEkalyComponent },
    { path: 'admin1234-home', component: admin_ekaly_home_component_1.AdminEkalyHomeComponent },
    { path: '**', pathMatch: 'full',
        component: pagenotfound_component_1.PagenotfoundComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [restaurant_component_1.RestaurantComponent, dishes_component_1.DishesComponent];
