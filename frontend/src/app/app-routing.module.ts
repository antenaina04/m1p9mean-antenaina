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
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'saveOrUpdateDishes', component: InsertDishesComponent },
  { path: 'saveOrUpdateRestaurant', component: InsertRestaurantComponent },
  { path: 'adminMenu-ekaly', component: AdminMenuComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: '**', pathMatch: 'full', 
  component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [RestaurantComponent, DishesComponent];
