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
// import { RestaurantComponent } from './restaurant/restaurant.component';
// import { DishesComponent } from './dishes/dishes.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    // RestaurantComponent,
    // DishesComponent
    routingComponents,
    LoginComponent,
    OrderPageComponent,
    OrderLineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
