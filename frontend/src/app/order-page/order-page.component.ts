import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Dishes } from '../shared/dishes.model';
import { Router, ActivatedRoute } from '@angular/router';

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
  constructor(
    private cartService: CartService,
    private _router: Router,
    private _Activatedroute: ActivatedRoute
  ) {}

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

  removeToCart(selectedItem: []) {
    let index = this.obj.indexOf(selectedItem);
    this.obj.splice(index, 1);
    this.sum();
    console.log('OBJ =' + JSON.stringify(this.obj.length));
    localStorage.setItem('panier', JSON.stringify(this.obj));
  }

  sum(): void {
    this.totalPrice = 0;
    if (this.obj) {
      this.obj.map((_dishes: any) => {
        const price: number = _dishes.dishes_price || 0;
        this.totalPrice += price;
      });
    }
  }

  checkout() {
    this._router.navigateByUrl('/checkout');
  }
}
