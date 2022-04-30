import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { Order } from '../shared/order.model';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(public orderService: OrderService) { }

  ngOnInit(): void {
    this.GetOrderByUser();
  }

  GetOrderByUser(){
    this.orderService.getOrderList().subscribe((res) => {
      this.orderService.order = res as Order[];
      console.log("OrderList =" + this.orderService.order);
    });
  }
}
