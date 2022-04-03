import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Restaurant } from './restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  selectedRestaurant: Restaurant = new Restaurant;
  restaurants: Restaurant[] = [];
  readonly baseURL: 'http://localhost:3000/restaurants' = "http://localhost:3000/restaurants";

  constructor(private http: HttpClient) { }

  postRestaurant(restaurant: Restaurant) {
    return this.http.post(this.baseURL, restaurant);
  }

  getRestaurantList(){
    return this.http.get(this.baseURL);
  }
}