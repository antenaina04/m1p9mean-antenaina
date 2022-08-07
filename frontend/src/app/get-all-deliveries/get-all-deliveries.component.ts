import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../shared/delivery.service';
import { Router, ActivatedRoute } from '@angular/router';

import { Delivery } from '../shared/delivery.model';

@Component({
  selector: 'app-get-all-deliveries',
  templateUrl: './get-all-deliveries.component.html',
  styleUrls: ['./get-all-deliveries.component.css'],
})
export class GetAllDeliveriesComponent implements OnInit {
  IdDeliverer = localStorage.getItem('IdDeliverer');
  newStrIdDeliverer!: any;
  constructor(
    private _Activatedroute: ActivatedRoute,
    public deliveryService: DeliveryService,
    private _router: Router
  ) {}
  sub: any;

  ngOnInit(): void {
    this.GetOrderDeliveryList();
  }

  GetOrderDeliveryList() {
    this.deliveryService.GetOrderDeliveryList().subscribe((res) => {
      this.deliveryService.delivery = res as Delivery[];
      console.log('DeliveryList =' + this.deliveryService.delivery);
    });
  }
  onSubmit(delivery: Delivery) {
    // Esorina ny []
    var objIdDeliverer = String(this.IdDeliverer).replace('[', '');
    var strIdDeliverer = objIdDeliverer.replace('"', '');
    var lastRemovedCharStrIdDeliverer = strIdDeliverer.replace(']', '');
    this.newStrIdDeliverer = lastRemovedCharStrIdDeliverer.replace('"', '');
    var data = {
      delivery_deliverer: this.newStrIdDeliverer,
    };
    this.deliveryService
      .putDelivery(data, String(delivery._id))
      .subscribe((res) => {
        //Doesn't work
        console.log('-- UPDATE DELIVERY SUCCEEDED --');
      });
      this.refreshPage();
  }

  refreshPage() {
    //Refresh page in order to add dishes in order-line-components
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      const url = 'delivererAdminMenu-ekaly';
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
