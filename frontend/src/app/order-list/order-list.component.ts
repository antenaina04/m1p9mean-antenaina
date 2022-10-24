import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { Order } from '../shared/order.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  // styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  IdUser = localStorage.getItem('IdUser');
  newStrIdUser: any;

  constructor(
    public orderService: OrderService,
    private _Activatedroute: ActivatedRoute,
    private _router: Router
  ) {}
  sub: any;

  ngOnInit(): void {
    this.GetOrderByUser();
  }

  GetOrderByUser() {
    var objIdUser = String(this.IdUser).replace('[', '');
    var strIdUser = objIdUser.replace('"', '');
    var lastRemovedCharStrIdUser = strIdUser.replace(']', '');
    this.newStrIdUser = lastRemovedCharStrIdUser.replace('"', '');

    this.orderService.GetOrderByIdUser(this.newStrIdUser).subscribe((res) => {
      this.orderService.order = res as Order[];
      console.log('OrderList =' + this.orderService.order);
    });
  }

  onClick(order: Order) {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      const url = 'GetOrderByUser/' + String(order._id);
      this._router
        .navigateByUrl('/', {
          skipLocationChange: true,
        })
        .then(() => {
          this._router.navigate([url]);
        });
    });
  }
}
