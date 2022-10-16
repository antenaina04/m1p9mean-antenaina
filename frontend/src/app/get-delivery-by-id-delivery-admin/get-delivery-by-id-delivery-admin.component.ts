import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { Order } from '../shared/order.model';

import { RestaurantService } from '../shared/restaurant.service';
import { Restaurant } from '../shared/restaurant.model';

import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

import { OrderDetailsService } from '../shared/order-details.service';
import { OrderDetails } from '../shared/order-details.model';

import { DishesService } from '../shared/dishes.service';
import { Dishes } from '../shared/dishes.model';

import { DeliveryService } from '../shared/delivery.service';
import { Delivery } from '../shared/delivery.model';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-delivery-by-id-delivery-admin',
  templateUrl: './get-delivery-by-id-delivery-admin.component.html',
  styleUrls: ['./get-delivery-by-id-delivery-admin.component.css'],
})
export class GetDeliveryByIdDeliveryAdminComponent implements OnInit {
  IdDeliverer = localStorage.getItem('IdDeliverer');
  newStrIdDeliverer!: any;
  constructor(
    private _Activatedroute: ActivatedRoute,
    public orderService: OrderService,
    public restaurantService: RestaurantService,
    public userService: UserService,
    public orderDetailsService: OrderDetailsService,
    public dishesService: DishesService,
    public deliveryService: DeliveryService, 
    private _router: Router
  ) {}
  sub: any;

  Delivery_id: any;
  Delivery_deliverer: any;
  Delivery_client: any;
  Delivery_location: any;
  Delivery_price: any;
  Id_order: any;
  Delivery_count: any;

  OrderID: any;
  UserID: any;
  RestaurantID: any;
  OrderStatus: any;
  OrderPrice: any;
  OrderDate: any;
  TotalAmountToPay: any;

  name: any;
  email: any;
  phone: any;

  restaurant_name: any;
  restaurant_location: any;
  restaurant_phone: any;

  id_dishes: any;
  //Initialize ObjectList
  ObjectList: any;

  async ngOnInit() {
    this.GetDeliveryByIdDelivery();
  }

  GetDeliveryByIdDelivery() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.deliveryService
        .GetDeliveryByIdDelivery(params?.get('id_delivery'))
        .subscribe((res) => {
          this.deliveryService.delivery = res as Delivery[];
          this.Delivery_deliverer = String(res.delivery_deliverer);
          this.Delivery_client = String(res.delivery_client);
          this.Delivery_location = String(res.delivery_location);
          this.Delivery_price = String(res.delivery_price);
          this.Delivery_count = String(res.delivery_count);
          this.Id_order = String(res.id_order);
          this.Delivery_id = String(res._id);

          // console.log('this.Delivery_deliverer = ' + this.Delivery_deliverer);
          // console.log('this.Delivery_client = ' + this.Delivery_client);
          // console.log('this.Delivery_location = ' + this.Delivery_location);
          // console.log('this.Delivery_price = ' + this.Delivery_price);
          // console.log('this.Id_order = ' + this.Id_order);

          this.GetOrderByIdOrder(this.Id_order);
          this.GetUserByIdUser(this.Delivery_client);
          this.GetOrderDetailsByIdOrder(this.Id_order);
        });
    });
  }

  GetOrderByIdOrder(id_order: string) {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.orderService.GetOrderByIdOrder(id_order).subscribe((res) => {
        this.orderService.order = res as Order[];
        this.UserID = String(res.id_user);
        this.RestaurantID = String(res.id_restaurant);
        this.OrderStatus = String(res.order_status);
        this.OrderPrice = String(res.order_price);
        this.OrderDate = String(res.created_at);
        this.TotalAmountToPay = String(res.total_amount_to_pay);
        this.OrderID = String(res._id);

        // console.log('this.UserID = ' + this.UserID);
        // console.log('this.RestaurantID = ' + this.RestaurantID);
        // console.log('this.OrderStatus = ' + this.OrderStatus);
        // console.log('this.OrderPrice = ' + this.OrderPrice);
        // console.log('this.OrderDate = ' + this.OrderDate);
        // console.log('this.TotalAmountToPay = ' + this.TotalAmountToPay);
        this.GetRestaurantByIdRestaurant(this.RestaurantID);
      });
    });
  }

  GetUserByIdUser(id_user: string) {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.userService.GetUserByIdUser(id_user).subscribe((res) => {
        this.userService.users = res as User[];
        this.name = String(res.name); //Affichage name
        this.email = String(res.email); //Affichage email
        this.phone = String(res.phone); //Affichage phone

        // console.log('this.name = ' + this.name);
        // console.log('this.email = ' + this.email);
        // console.log('this.phone = ' + this.phone);
      });
    });
  }

  GetRestaurantByIdRestaurant(id_restaurant: string) {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.restaurantService
        .getRestaurantByIdRestaurant(id_restaurant)
        .subscribe((res) => {
          this.restaurantService.restaurants = res as Restaurant[];
          this.restaurant_name = String(res.restaurant_name);
          this.restaurant_location = String(res.restaurant_location);
          this.restaurant_phone = String(res.restaurant_phone);

          // console.log('this.restaurant_name = ' + this.restaurant_name);
          // console.log('this.restaurant_location = ' + this.restaurant_location);
          // console.log('this.restaurant_phone = ' + this.restaurant_phone);
        });
    });
  }

  async GetOrderDetailsByIdOrder(id_order: string) {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.orderDetailsService
        .getOrderDetailsByIdOrder(String(id_order))
        .subscribe((res) => {
          this.orderDetailsService.orderDetails = res as OrderDetails[];
          let Obj: any;
          var ObjList = new Array();
          for (
            let i = 0;
            i < this.orderDetailsService.orderDetails.length;
            i++
          ) {
            this.id_dishes = this.orderDetailsService.orderDetails[i].id_dishes;
            this.sub = this._Activatedroute.paramMap.subscribe(
              async (params) => {
                this.dishesService
                  .getDishesByIdDishes(this.id_dishes)
                  .subscribe((res) => {
                    this.dishesService;
                    this.dishesService.dishes = res as Dishes[];
                    // Create Obj
                    Obj = {
                      dishes_name: res.dishes_name,
                      dishes_desc: res.dishes_desc,
                      dishes_price: res.dishes_price,
                    };

                    if (Array.isArray(ObjList)) {
                      ObjList.push(Obj); // this will work fine
                    } else {
                      console.log('ObjList is not an array!');
                    }
                    this.ObjectList = ObjList;
                  });
              }
            );
          }
        });
    });
  }

  returnPage() {
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

  onSubmit(delivery_id: string) {
    // Esorina ny []
    var objIdDeliverer = String(this.IdDeliverer).replace('[', '');
    var strIdDeliverer = objIdDeliverer.replace('"', '');
    var lastRemovedCharStrIdDeliverer = strIdDeliverer.replace(']', '');
    this.newStrIdDeliverer = lastRemovedCharStrIdDeliverer.replace('"', '');
    var data = {
      delivery_deliverer: this.newStrIdDeliverer,
    };

    //Send delivery.id_order**Update-Orderstatus
    this.deliveryService
      .putDelivery(data, String(delivery_id))
      .subscribe((res) => {
        console.log('-- UPDATE DELIVERY SUCCEEDED --');
      });

    // Update order_status
    var data2 = {
      order_status: 'Commande livrée',
    };
    this.orderService.putOrder(data2, String(this.OrderID)).subscribe((res) => {
      console.log('-- UPDATE ORDER SUCCEEDED --');
    });

    this.returnPage();
  }
}
