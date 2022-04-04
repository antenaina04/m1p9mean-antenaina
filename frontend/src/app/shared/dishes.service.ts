import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Dishes } from './dishes.model';
import { Restaurant } from './restaurant.model';

@Injectable({
  providedIn: 'root',
})
export class DishesService {
  selectedDishes: Dishes = new Dishes();
  selectedRestaurant: Restaurant = new Restaurant();
  dishes: Dishes[] = [];
  id_restaurant: any;
  readonly baseURL: 'http://localhost:3000/dishes' =
    'http://localhost:3000/dishes';

  constructor(private http: HttpClient) {}

  postUser(dishes: Dishes) {
    return this.http.post(this.baseURL, dishes);
  }

  getDishesList() {
    return this.http.get(this.baseURL);
  }

  getDishesByRestaurant(id_restaurant: string | null): Observable<Dishes[]> {
    return this.http.get<Dishes[]>(
      this.baseURL + `/restaurant/` + id_restaurant
    );
  }
}
