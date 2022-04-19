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

  Username:any;
  IdUser:any;
  constructor(public restaurantService: RestaurantService) { }



  ngOnInit(): void {
    this.Username = localStorage.getItem('Username');
    this.IdUser = localStorage.getItem('IdUser');
    this.refreshRestaurantList();
  }

  refreshRestaurantList(){
    this.restaurantService.getRestaurantList().subscribe((res)=>{
      this.restaurantService.restaurants = res as Restaurant[];
    });
  }

  search(form?: NgForm) {
    console.log(form?.value.restaurant_name);
    if (
      form?.value.restaurant_name == '' ||
      form?.value.restaurant_name == undefined
    ) {
      // console.log("REFRESY");
      this.refreshRestaurantList();
    } else {
      this.restaurantService
        .GetRestaurantByRestaurantName(
          String(this.restaurantService.selectedRestaurant.restaurant_name)
        )
        .subscribe((res) => {
          this.restaurantService.restaurants = res as Restaurant[];
          // console.log("okaaayyy eee==="+JSON.stringify(this.restaurantService.selectedRestaurant));
        });
    }
  }

}
