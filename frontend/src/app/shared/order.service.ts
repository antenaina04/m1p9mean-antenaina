import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  selectedOrder: Order = new Order();
  // selectedRestaurant: Restaurant = new Restaurant();
  order: Order[] = [];

  id_user: any;
  order_status: any;

  
  readonly baseURL: 'http://localhost:3000/orders' =
    'http://localhost:3000/orders';

  constructor(private http: HttpClient) {}

  postOrder(order: Order) {
    return this.http.post(this.baseURL, order);
  }

  getOrderList() {
    return this.http.get(this.baseURL);
  }

  GetOrderByIdUserAndStatus(
    id_user: string | null,
    order_status: string | null
  ): Observable<Order[]> {
    // console.log('id_user ------' + id_user);
    // console.log('order_status ------' + order_status);
    return this.http.get<Order[]>(
      this.baseURL + `/GetOrderByIdUserAndStatus/` + id_user + `/` + order_status
    );
  }

}
