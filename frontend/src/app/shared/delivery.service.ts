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


  GetDeliveryByIdDelivery(
    id_delivery: string | null
  ): Observable<Delivery> {
    console.log("LINK =" + this.baseURL + `/` + id_delivery);
    return this.http.get<Delivery>(this.baseURL + `/` + id_delivery);
  } 

  GetOrderDeliveryList() {
    return this.http.get(this.baseURL+ `/GetOrderDelivery/Non-choisi`);
  }

  GetDeliveryByDelivererName(
    delivery_deliverer: string | null
  ): Observable<Delivery> {
    return this.http.get<Delivery>(
      this.baseURL + `/GetDeliveryByDelivererName/` + delivery_deliverer
    );
  }

  GetDeliveryByOrderId(
    id_order: string | null
  ): Observable<Delivery> {
    console.log("LINK =" + this.baseURL + `/GetDeliveryByIdOrder/` + id_order);
    return this.http.get<Delivery>(
      this.baseURL + `/GetDeliveryByIdOrder/` + id_order
    );
  }

  

  // Calculer nombre de livraison
  DeliveryCount(dishes_count: number) {
    var delivery_count;
    delivery_count = dishes_count / 2; // Max Plat pour 1 livraison = 2
    return Math.round(delivery_count);
  }

  // Calcul benefice
  GetBenefits(initial_price: number, Percentage: number) {
    var Benefits;
    Benefits = (Percentage * initial_price) / 100;
    return Benefits;
  }

  // Calcul frais de livraison
  GetShippingCost(
    initial_price: number,
    Percentage: number,
    DeliveryCount: number
  ) {
    var ShippingCost;
    ShippingCost =
      (this.GetBenefits(initial_price, Percentage) + initial_price) *
      DeliveryCount;
    return ShippingCost;
  }

  // Calcul Montant total a payer
  GetTotalAmountToPay(subtotal: number, ShippingCost: number) {
    var TotalAmountToPay;
    TotalAmountToPay = subtotal + ShippingCost;
    return TotalAmountToPay;
  }
}
