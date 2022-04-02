import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { RestaurantService } from '../shared/restaurant.service';
import { Restaurant } from '../shared/restaurant.model';

let restaurant_name: string;
let restaurant_location: string;
let restaurant_phone: string;
let restaurant_logo: string;



@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  providers: [RestaurantService],

})
export class RestaurantComponent implements OnInit {

  constructor(public restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.refreshRestaurantList();
  }

  refreshRestaurantList(){
    this.restaurantService.getRestaurantList().subscribe((res)=>{
      this.restaurantService.restaurants = res as Restaurant[];
    });
  }

}
