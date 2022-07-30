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
    RestaurantLoginComponent
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
