import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { Order } from '../shared/order.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-all-orders-by-restaurant',
  templateUrl: './get-all-orders-by-restaurant.component.html',
  // styleUrls: ['./get-all-orders-by-restaurant.component.css'],
})
export class GetAllOrdersByRestaurantComponent implements OnInit {
  IdRestaurant = localStorage.getItem('IdRestaurant');
  newStrIdRestaurant!: any;
  show = false;

  constructor(
    private _Activatedroute: ActivatedRoute,
    public orderService: OrderService,
    private _router: Router
  ) {}
  sub: any;

  ngOnInit(): void {
    this.GetAllOrderByRestaurant();
  }

  GetAllOrderByRestaurant() {
    // Erase []
    var objIdRestaurant = String(this.IdRestaurant).replace('[', '');
    var strIdRestaurant = objIdRestaurant.replace('"', '');
    var lastRemovedCharStrIdRestaurant = strIdRestaurant.replace(']', '');
    this.newStrIdRestaurant = lastRemovedCharStrIdRestaurant.replace('"', '');
    console.log('newStrIdRestaurant =' + this.newStrIdRestaurant);
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.orderService
        // .getOrdersByRestaurant(this.newStrIdRestaurant)
        .getOrdersByRestaurant(params?.get('id_restaurant'))
        .subscribe((res) => {
          this.orderService.order = res as Order[];
          // for (var i = 0; i < this.orderService.order.length; i++) {
          //   console.log("ORDER STATUS ="+ this.orderService.order[i].order_status)
          //   if (this.orderService.order[i].order_status == "COMMANDE ENVOYE") {
          //     this.show = true;
          //   } else if(this.orderService.order[i].order_status == "En cours de livraison"){
          //     this.show = false;
          //   }
          //   else if(this.orderService.order[i].order_status == "Commande livrée"){
          //     this.show = false;
          //   }
          // }
        });
    });
  }

  onSubmit(order: Order) {
    var data = {
      order_status: 'En cours de livraison',
    };
    this.orderService.putOrder(data, String(order._id)).subscribe((res) => {
      console.log('-- UPDATE ORDER SUCCEEDED --');
    });
    this.refreshPage();
  }

  // Voir details
  onClick(order: Order) {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      const url = 'GetOrderByIdOrderAdmin/' + String(order._id);
      this._router
        .navigateByUrl('/', {
          skipLocationChange: true,
        })
        .then(() => {
          this._router.navigate([url]);
        });
    });
  }

  refreshPage() {
    //Refresh page in order to add dishes in order-line-components
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      const url = 'restaurantAdminMenu-ekaly/' + params?.get('id_restaurant');
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
