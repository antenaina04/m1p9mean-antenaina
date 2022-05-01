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
  Username = localStorage.getItem('Username');
  IdUser = localStorage.getItem('IdUser');
  WelcomeText!: string;

  show = false;
  constructor(public restaurantService: RestaurantService) {}

  ngOnInit(): void {
    // Welcome text
    if (
      this.Username == null ||
      this.Username == undefined ||
      this.Username == '' ||
      this.Username == 'null'
    ) {
      this.show = false;
    } else {
      this.WelcomeText = 'Bienvenue ' + this.Username;
      this.show = true;
    }

    this.refreshRestaurantList();
  }

  refreshRestaurantList() {
    this.restaurantService.getRestaurantList().subscribe((res) => {
      this.restaurantService.restaurants = res as Restaurant[];
    });
  }

  search(form?: NgForm) {
    console.log(form?.value.restaurant_name);
    if (
      form?.value.restaurant_name == '' ||
      form?.value.restaurant_name == undefined
    ) {
      this.refreshRestaurantList();
    } else {
      this.restaurantService
        .GetRestaurantByRestaurantName(
          String(this.restaurantService.selectedRestaurant.restaurant_name)
        )
        .subscribe((res) => {
          this.restaurantService.restaurants = res as Restaurant[];
        });
    }
  }
}
