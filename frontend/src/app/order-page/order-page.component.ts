import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Dishes } from '../shared/dishes.model';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css'],
})
export class OrderPageComponent implements OnInit {
  // items = this.cartService.getItems();
  totalPrice!: number;
  obj!: any;

  panier = localStorage.getItem('panier');
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.obj = JSON.parse(String(this.panier));
    console.log(this.obj);
    this.sum();
  }

  // removeToCart(dishes: Dishes) {
  //   this.cartService.removeToCart(dishes);
  //   this.sum();
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
