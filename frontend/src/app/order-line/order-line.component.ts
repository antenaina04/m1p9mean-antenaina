import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Dishes } from '../shared/dishes.model';

import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-order-line',
  templateUrl: './order-line.component.html',
  styleUrls: ['./order-line.component.css'],
})
export class OrderLineComponent implements OnInit {
  totalPrice!: number;
  obj!: any;
  panier = localStorage.getItem('panier');
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.obj = JSON.parse(String(this.panier));
    this.sum();
  }

  // removeToCart(dishes: Dishes) {
  //   this.cartService.removeToCart(dishes);
  //   window.alert(dishes.dishes_name + ' supprimé du panier!');
  // }

  sum(): void {
    this.totalPrice = 0;
    if (this.obj) {
      this.obj.map((_dishes:any) => {
        const price: number = _dishes.dishes_price || 0;
        this.totalPrice += price;
      });
    }
  }
}
