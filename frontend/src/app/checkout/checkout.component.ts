import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  Username = localStorage.getItem('Username');
  IdUser = localStorage.getItem('IdUser');
  panier = localStorage.getItem('panier');
  totalPrice!: number;
  obj!: any;
  show = true;
  constructor() { }

  ngOnInit(): void {
    this.obj = JSON.parse(String(this.panier));
    this.sum();

    if (
      this.Username == null ||
      this.Username == undefined ||
      this.Username == '' ||
      this.Username == 'null'
    ) {
      this.show = true;
    } else {
      this.show = false;
    }

  }

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
