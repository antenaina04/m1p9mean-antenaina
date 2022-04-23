import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Delivery } from './delivery.model';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  selectedDelivery: Delivery = new Delivery();
  delivery: Delivery[] = [];
  readonly baseURL: 'http://localhost:3000/delivery' =
    'http://localhost:3000/delivery';
  constructor(private http: HttpClient) {}

  postDelivery(delivery: Delivery) {
    return this.http.post(this.baseURL, delivery);
  }

  putDelivery(delivery: Delivery, _id: string | null) {
    return this.http.put(this.baseURL + `/` + _id, delivery);
  }

  getDeliveryList() {
    return this.http.get(this.baseURL);
  }

  GetDeliveryByDelivererName(
    delivery_deliverer: string | null
  ): Observable<Delivery> {
    return this.http.get<Delivery>(
      this.baseURL + `/GetDeliveryByDelivererName/` + delivery_deliverer
    );
  }
}
