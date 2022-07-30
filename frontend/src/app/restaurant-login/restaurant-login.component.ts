import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RestaurantService } from '../shared/restaurant.service';
import { Restaurant } from '../shared/restaurant.model';

@Component({
  selector: 'app-restaurant-login',
  templateUrl: './restaurant-login.component.html',
  styleUrls: ['./restaurant-login.component.css']
})
export class RestaurantLoginComponent implements OnInit {
  loginError: any;
  constructor(private _router: Router, public restaurantService: RestaurantService) { }

  ngOnInit(): void {
  }

  GetRestaurantByEmailAndPassword(form?: NgForm){
    
    // this.obj = JSON.parse(String(this.panier));
    this.restaurantService
      .GetRestaurantByEmailAndPassword(
        String(this.restaurantService.selectedRestaurant.restaurant_email),
        String(this.restaurantService.selectedRestaurant.restaurant_password)
      )
      .subscribe((res) => {
        this.restaurantService.restaurants = res as Restaurant[];
        console.log('RESPONSA = ' + JSON.stringify(this.restaurantService.restaurants));
        if (this.restaurantService.restaurants.length != 0) {
          let IdRestaurant = this.restaurantService.restaurants.map((restaurant) => restaurant._id);
          let restaurant_name = this.restaurantService.restaurants.map((restaurant) => restaurant.restaurant_name);
          let restaurant_email = this.restaurantService.restaurants.map((restaurant) => restaurant.restaurant_email);
          console.log('IdRestaurant  == ' + IdRestaurant);
          console.log('restaurant_name  == ' + restaurant_name);
          console.log('restaurant_email  == ' + restaurant_email);

          //=> CreateSessions
          localStorage.setItem('restaurant_name', JSON.stringify(restaurant_name));
          localStorage.setItem('IdRestaurant', JSON.stringify(IdRestaurant));          
            // this._router.navigateByUrl('/restaurant');
        }        
        // => If there is an error on login
        else {
          this.resetLogin();
        }
      });
  }

  resetLogin(form?: NgForm) {
    if (form) form.reset();
    this.restaurantService.selectedRestaurant = {
      _id: '',
      restaurant_email: '',
      restaurant_password: '',
    };
    this.loginError =
      "L'adresse email ou le mots de passe ne correspond pas à un compte restaurant de e-kaly";
  }

}
