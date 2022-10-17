import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { DeliveryService } from '../shared/delivery.service';
import { RestaurantService } from '../shared/restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from '../shared/order.model';
import { Restaurant } from '../shared/restaurant.model';

@Component({
  selector: 'app-get-benefits-restaurants',
  templateUrl: './get-benefits-restaurants.component.html',
  styleUrls: ['./get-benefits-restaurants.component.css'],
})
export class GetBenefitsRestaurantsComponent implements OnInit {
  constructor(
    public orderService: OrderService,
    public deliveryService: DeliveryService,
    public restaurantService: RestaurantService,
    private _Activatedroute: ActivatedRoute,
    private _router: Router
  ) {}
  sub: any;

  Benefits: any;
  restaurant_id: any;
  ObjectList: any;
  
  ngOnInit(): void {
    this.GetOrder();
  }

  GetOrder() {
    this.orderService.getOrderList().subscribe((res) => {
      this.orderService.order = res as Order[];

      let RESULT: any;
      let Obj: any;
      var ObjList = new Array();
      for (let i = 0; i < this.orderService.order.length; i++) {
        this.restaurant_id = String(this.orderService.order[i].id_restaurant);
        this.sub = this._Activatedroute.paramMap.subscribe(async (params) => {
          this.restaurantService
            .getRestaurantByIdRestaurant(this.restaurant_id)
            .subscribe(async (res) => {
              this.restaurantService;
              this.restaurantService.restaurants = res as Restaurant[];
              // Create Obj
              Obj = {
                order_date: String(this.orderService.order[i].created_at),
                restaurant_name: String(res.restaurant_name),
                order_price: parseInt(
                  String(this.orderService.order[i].order_price)
                ),
                benefits: this.deliveryService.GetBenefits(
                  parseInt(String(this.orderService.order[i].order_price)),
                  20
                ),
              };

              if (Array.isArray(ObjList)) {
                await ObjList.push(Obj); // this will work fine
              } else {
                console.log('ObjList is not an array!');
              }

              //REDUCE AND MAP FUNCTION => GROUPBY
              let map = ObjList?.reduce((prev, next) => {
                if (next.restaurant_name in prev) {
                  prev[next.restaurant_name].benefits += next.benefits;
                  prev[next.restaurant_name].order_price += next.order_price;
                } else {
                  prev[next.restaurant_name] = next;
                }
                return prev;
              }, {});

              RESULT = Object.keys(map).map(
                (restaurant_name) => map[restaurant_name]
              );
              console.log('resultat =' + JSON.stringify(RESULT));
              this.ObjectList = RESULT;
            });
        });
      }
    });
  }
}
