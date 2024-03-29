import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantComponent } from './restaurant/restaurant.component';
import { DishesComponent } from './dishes/dishes.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { InsertDishesComponent } from './insert-dishes/insert-dishes.component';
import { InsertRestaurantComponent } from './insert-restaurant/insert-restaurant.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PreviewComponent } from './preview/preview.component';
import { OrderListComponent } from './order-list/order-list.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { RestaurantLoginComponent } from './restaurant-login/restaurant-login.component';
import { ServiceDeliveryLoginComponent } from './service-delivery-login/service-delivery-login.component';
import { InsertDelivererComponent } from './insert-deliverer/insert-deliverer.component';
import { RestaurantAdminMenuComponent } from './restaurant-admin-menu/restaurant-admin-menu.component';
import { DelivererAdminMenuComponent } from './deliverer-admin-menu/deliverer-admin-menu.component';
import { GetOrderByIdOrderAdminComponent } from './get-order-by-id-order-admin/get-order-by-id-order-admin.component';
import { GetDeliveryByIdDeliveryAdminComponent } from './get-delivery-by-id-delivery-admin/get-delivery-by-id-delivery-admin.component';
import { GetOrderByUserComponent } from './get-order-by-user/get-order-by-user.component';
import { LoginEkalyComponent } from './login-ekaly/login-ekaly.component';
import { AdminEkalyHomeComponent } from './admin-ekaly-home/admin-ekaly-home.component';




import { PagenotfoundComponent } from 
    './pagenotfound/pagenotfound.component';



const routes: Routes = [
  { path: '', component: RestaurantComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'dishes', component: DishesComponent },
  { path: 'dishes/restaurant/:id_restaurant', component: DishesComponent },
  { path: 'order', component: OrderPageComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'preview', component: PreviewComponent },
  { path: 'orderList', component: OrderListComponent },
  { path: 'GetOrderByUser/:id_order', component: GetOrderByUserComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'saveOrUpdateDishes', component: InsertDishesComponent },
  { path: 'adminMenu-ekaly', component: AdminMenuComponent },
  { path: 'loginRestaurant-ekaly', component: RestaurantLoginComponent },
  { path: 'registerRestaurant-ekaly', component: InsertRestaurantComponent },
  { path: 'restaurantAdminMenu-ekaly/:id_restaurant', component: RestaurantAdminMenuComponent },
  { path: 'GetOrderByIdOrderAdmin/:id_order', component: GetOrderByIdOrderAdminComponent },
  { path: 'loginServiceDelivery-ekaly', component: ServiceDeliveryLoginComponent },
  { path: 'registerDeliverer-ekaly', component: InsertDelivererComponent },
  { path: 'delivererAdminMenu-ekaly', component: DelivererAdminMenuComponent },
  { path: 'GetDeliveryByIdDeliveryAdmin/:id_delivery', component: GetDeliveryByIdDeliveryAdminComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'contactUs', component: ContactUsComponent },

  { path: 'admin1234', component: LoginEkalyComponent },
  { path: 'admin1234-home', component: AdminEkalyHomeComponent },

  
  { path: '**', pathMatch: 'full', 
  component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [RestaurantComponent, DishesComponent];
