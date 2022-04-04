import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantComponent } from './restaurant/restaurant.component';
import { DishesComponent} from './dishes/dishes.component';


const routes: Routes = [
  {path:'', component:RestaurantComponent},
  {path:'restaurant', component:RestaurantComponent},
  {path:'dishes', component:DishesComponent},
  {path:'dishes/restaurant/:id_restaurant', component:DishesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents  = [RestaurantComponent, DishesComponent]