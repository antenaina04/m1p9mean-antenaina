import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../shared/delivery.service';
import { Delivery } from '../shared/delivery.model';



@Component({
  selector: 'app-get-all-deliveries',
  templateUrl: './get-all-deliveries.component.html',
  styleUrls: ['./get-all-deliveries.component.css']
})
export class GetAllDeliveriesComponent implements OnInit {

  constructor(public deliveryService: DeliveryService) { }

  ngOnInit(): void {
    this.GetOrderDeliveryList();
  }

  GetOrderDeliveryList(){
    this.deliveryService.GetOrderDeliveryList().subscribe((res) => {
      this.deliveryService.delivery = res as Delivery[];
      console.log("DeliveryList =" + this.deliveryService.delivery);
    });
  }

}
