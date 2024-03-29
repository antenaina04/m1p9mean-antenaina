import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { OrderLineComponent } from './order-line/order-line.component';
// import { ProfileComponent } from './profile/profile.component';
import { InsertDishesComponent } from './insert-dishes/insert-dishes.component';
import { InsertRestaurantComponent } from './insert-restaurant/insert-restaurant.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
// import { RestaurantComponent } from './restaurant/restaurant.component';
// import { DishesComponent } from './dishes/dishes.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { CheckoutComponent } from './checkout/checkout.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PreviewComponent } from './preview/preview.component';
import { OrderListComponent } from './order-list/order-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { RestaurantLoginComponent } from './restaurant-login/restaurant-login.component';
import { ServiceDeliveryLoginComponent } from './service-delivery-login/service-delivery-login.component';
import { InsertDelivererComponent } from './insert-deliverer/insert-deliverer.component';
import { RestaurantAdminMenuComponent } from './restaurant-admin-menu/restaurant-admin-menu.component';
import { GetAllOrdersByRestaurantComponent } from './get-all-orders-by-restaurant/get-all-orders-by-restaurant.component';
import { DelivererAdminMenuComponent } from './deliverer-admin-menu/deliverer-admin-menu.component';
import { GetAllDeliveriesComponent } from './get-all-deliveries/get-all-deliveries.component';
import { GetOrderByIdOrderAdminComponent } from './get-order-by-id-order-admin/get-order-by-id-order-admin.component';
import { GetDeliveryByIdDeliveryAdminComponent } from './get-delivery-by-id-delivery-admin/get-delivery-by-id-delivery-admin.component';
import { GetOrderByUserComponent } from './get-order-by-user/get-order-by-user.component';
import { GetBenefitsRestaurantsComponent } from './get-benefits-restaurants/get-benefits-restaurants.component';
import { LoginEkalyComponent } from './login-ekaly/login-ekaly.component';
import { AdminEkalyHomeComponent } from './admin-ekaly-home/admin-ekaly-home.component';
import { GetBenefitsDateComponent } from './get-benefits-date/get-benefits-date.component';
import { GetDetailedBenefitsComponent } from './get-detailed-benefits/get-detailed-benefits.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    // RestaurantComponent,
    // DishesComponent
    routingComponents,
    LoginComponent,
    OrderPageComponent,
    OrderLineComponent,
    // ProfileComponent,
    InsertDishesComponent,
    InsertRestaurantComponent,
    AboutUsComponent,
    ContactUsComponent,
    CheckoutComponent,
    DeliveryComponent,
    PreviewComponent,
    OrderListComponent,
    PagenotfoundComponent,
    AdminMenuComponent,
    RestaurantLoginComponent,
    ServiceDeliveryLoginComponent,
    InsertDelivererComponent,
    RestaurantAdminMenuComponent,
    GetAllOrdersByRestaurantComponent,
    DelivererAdminMenuComponent,
    GetAllDeliveriesComponent,
    GetOrderByIdOrderAdminComponent,
    GetDeliveryByIdDeliveryAdminComponent,
    GetOrderByUserComponent,
    GetBenefitsRestaurantsComponent,
    LoginEkalyComponent,
    AdminEkalyHomeComponent,
    GetBenefitsDateComponent,
    GetDetailedBenefitsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
