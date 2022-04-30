import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DeliveryService } from '../shared/delivery.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  Username = localStorage.getItem('Username');
  IdUser = localStorage.getItem('IdUser');
  panier = localStorage.getItem('panier');
  totalPrice!: number;
  obj!: any;
  show = true;
  constructor(
    public deliveryService: DeliveryService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.obj = JSON.parse(String(this.panier));
    this.sum();

    if (
      String(this.panier) == "[]" ||
      this.panier == undefined ||
      this.panier == ''
    ) {
      this._router.navigateByUrl('/order');
    } else {
      if (
        this.Username == null ||
        this.Username == undefined ||
        this.Username == '' ||
        this.Username == 'null'
      ) {
        this.show = true;
      } else {
        this.show = false;
        this._router.navigateByUrl('/preview');
      }
    }
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
}
