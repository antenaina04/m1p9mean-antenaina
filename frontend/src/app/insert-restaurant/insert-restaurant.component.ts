import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { RestaurantService } from '../shared/restaurant.service';
import { Restaurant } from '../shared/restaurant.model';

@Component({
  selector: 'app-insert-restaurant',
  templateUrl: './insert-restaurant.component.html',
  styleUrls: ['./insert-restaurant.component.css'],
})
export class InsertRestaurantComponent implements OnInit {
  constructor(
    private _Activatedroute: ActivatedRoute,
    public restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {}

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.restaurantService.selectedRestaurant = {
      _id: '',
      restaurant_name: '',
      restaurant_location: '',
      restaurant_phone: '',
    };
  }

  onSubmit(form?: NgForm) {
    console.log(this.restaurantService.selectedRestaurant.restaurant_name);
    console.log(this.restaurantService.selectedRestaurant.restaurant_location);
    console.log(this.restaurantService.selectedRestaurant.restaurant_phone);
    if (
      this.restaurantService.selectedRestaurant.restaurant_name == '' ||
      this.restaurantService.selectedRestaurant.restaurant_name == undefined
    ) {
      console.log('Veuillez remplir restaurant_name');
    } else if (
      this.restaurantService.selectedRestaurant.restaurant_location == '' ||
      this.restaurantService.selectedRestaurant.restaurant_location == undefined
    ) {
      console.log('Veuillez remplir restaurant_location');
    } else if (
      this.restaurantService.selectedRestaurant.restaurant_phone == null ||
      this.restaurantService.selectedRestaurant.restaurant_phone == undefined
    ) {
      console.log('Veuillez remplir restaurant_phone');
    } else {
      console.log(
        'okaaayyy eee===' +
          JSON.stringify(this.restaurantService.selectedRestaurant._id)
      );

      this.restaurantService.postRestaurant(form?.value).subscribe((res) => {
        console.log('-- INSERT RESTAURANT SUCCEEDED --');
        this.resetForm(form);
      });
      console.log('INSERT {[Restaurant]} OK');
    }
  }
}
