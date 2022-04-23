import { Injectable } from '@angular/core';
import { Dishes } from './shared/dishes.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Dishes[] = [];
  totalPrice!: number;
  constructor(private http: HttpClient) {}

  addToCart(dishes: Dishes) {
    this.items.push(dishes);
 
    var value = localStorage.getItem('panier');
    if (value !== null && value !== "") {
      value += dishes;
    }else{
      value = "" ;
    }
    localStorage.setItem('panier', JSON.stringify(this.items));
  }

  removeToCart(dishes: Dishes) {
    this.items.splice(this.items.indexOf(dishes), 1);;
  }

  getItems() {
    return this.items;
  }

  // clearCart() {
  //   this.items = [];
  //   return this.items;
  // } 
}
