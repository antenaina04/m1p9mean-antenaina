import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { OrderDetails } from './order-details.model';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  selectedOrderDetails: OrderDetails = new OrderDetails();
  orderDetails: OrderDetails[] = [];
  
  readonly baseURL: 'http://localhost:3000/orderDetails' =
    'http://localhost:3000/orderDetails';

  constructor(private http: HttpClient) {}


  getOrderDetailsByIdOrder(id_order: string | null): Observable<OrderDetails[]> {
    return this.http.get<OrderDetails[]>(
      this.baseURL + `/order/` + id_order
    );
  }
}
