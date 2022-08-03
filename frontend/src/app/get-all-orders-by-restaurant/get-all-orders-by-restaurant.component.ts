import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { Order } from '../shared/order.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-get-all-orders-by-restaurant',
  templateUrl: './get-all-orders-by-restaurant.component.html',
  styleUrls: ['./get-all-orders-by-restaurant.component.css']
})
export class GetAllOrdersByRestaurantComponent implements OnInit {
  IdRestaurant = localStorage.getItem('IdRestaurant');
  newStrIdRestaurant!: any;
  constructor(
    private _Activatedroute: ActivatedRoute,
    public orderService: OrderService) { }
  sub: any;


  ngOnInit(): void {
    this.GetAllOrderByRestaurant();
  }

  GetAllOrderByRestaurant(){
    this.orderService.getOrderList().subscribe((res) => {
      this.orderService.order = res as Order[];
      console.log("OrderList =" + this.orderService.order);
    });


    // Esorina ny []

    var objIdRestaurant = String(this.IdRestaurant).replace('[', '');
    var strIdRestaurant = objIdRestaurant.replace('"', '');
    var lastRemovedCharStrIdRestaurant = strIdRestaurant.replace(']', '');
    this.newStrIdRestaurant = lastRemovedCharStrIdRestaurant.replace('"', '');

    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.orderService
        .getOrdersByRestaurant(this.newStrIdRestaurant)
        .subscribe((res) => {
          this.orderService.order = res as Order[];
        });
    });
  }
}
