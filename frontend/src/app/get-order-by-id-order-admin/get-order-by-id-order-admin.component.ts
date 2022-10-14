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
  selector: 'app-get-order-by-id-order-admin',
  templateUrl: './get-order-by-id-order-admin.component.html',
  styleUrls: ['./get-order-by-id-order-admin.component.css'],
})
export class GetOrderByIdOrderAdminComponent implements OnInit {
  constructor(
    private _Activatedroute: ActivatedRoute,
    public orderService: OrderService,
    public restaurantService: RestaurantService,
    public userService: UserService,
    public orderDetailsService: OrderDetailsService,
    public dishesService: DishesService,
    public deliveryService: DeliveryService
  ) {}
  sub: any;

  UserID: any;
  RestaurantID: any;
  OrderStatus: any;
  OrderPrice: any; //TotalPrice
  OrderDate: any;
  TotalAmountToPay: any;


  restaurant_name: any;
  restaurant_location: any;
  restaurant_phone: any;

  name: any;
  email: any;
  phone: any;

  
  // DeliveryField
  // Delivery_deliverer: any;
  // Delivery_location: any;
  // Delivery_price: any;
  // Delivery_count: any; 


  Delivery_deliverer!: string;
  Delivery_location!: string;
  Delivery_price!: string;
  Delivery_count!: string;
  Delivery_date!: string;



  total_amount_to_pay: any;

  id_dishes: any;

  dishesPriceResult1: any;
  dishesPrice: any;

  dishes_name: any;
  dishes_desc: any;
  dishes_price: any;

  //Initialize ObjectList
  ObjectList: any;

  async ngOnInit() {
    this.GetOrderByIdOrder();
    // this.GetRestaurantByIdRestaurant(this.RestaurantID);
    // this.GetUserByIdUser(this.UserID);
    this.GetOrderDetailsByIdOrder();
    this.GetDeliveryByIdOrder();
  }

  GetOrderByIdOrder() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.orderService
        // .getOrdersByRestaurant(this.newStrIdRestaurant)
        .GetOrderByIdOrder(params?.get('id_order'))
        .subscribe((res) => {
          this.orderService.order = res as Order[];
          this.UserID = String(res.id_user); //Affichage UserID
          this.RestaurantID = String(res.id_restaurant); //Affichage RestaurantID
          this.OrderStatus = String(res.order_status); //Affichage OrderStatus
          this.OrderPrice = String(res.order_price); //Affichage OrderPrice
          this.OrderDate = String(res.created_at); //Affichage OrderDate
          this.TotalAmountToPay = String(res.total_amount_to_pay)


          console.log("this.RestaurantID = " + this.RestaurantID)
          this.total_amount_to_pay = String(res.total_amount_to_pay);
          
          this.GetRestaurantByIdRestaurant(this.RestaurantID);
          this.GetUserByIdUser(this.UserID);
        });
    });
  }

  GetRestaurantByIdRestaurant(id_restaurant: string) {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.restaurantService
        .getRestaurantByIdRestaurant(id_restaurant)
        .subscribe((res) => {
          this.restaurantService.restaurants = res as Restaurant[];
          this.restaurant_name = String(res.restaurant_name); //Affichage restaurant_name
          this.restaurant_location = String(res.restaurant_location); //Affichage restaurant_location
          this.restaurant_phone = String(res.restaurant_phone); //Affichage restaurant_phone
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
      });
    });
  }

  // GetDishesPriceByIdDishes(id_dishes: string) {
  //   this.sub = this._Activatedroute.paramMap.subscribe((params) => {
  //     this.dishesService
  //       .getDishesByIdDishes(String(id_dishes))
  //       .subscribe((res) => {
  //         this.dishesService.dishes = res as Dishes[];
  //         this.dishesPriceResult1 = res.dishes_price;
  //         console.log('eto pory =' + this.dishesPriceResult1);
  //       });
  //   });
  //   return this.dishesPriceResult1;
  // }

  async GetOrderDetailsByIdOrder() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.orderDetailsService
        .getOrderDetailsByIdOrder(params?.get('id_order'))
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
                -this.dishesService
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




  GetDeliveryByIdOrder(){
    // this.sub = this._Activatedroute.paramMap.subscribe(  (params) => {
    //   this.deliveryService
    //     // .getOrdersByRestaurant(this.newStrIdRestaurant)
    //     .GetDeliveryByOrderId(params?.get('id_order'))
    //     .subscribe((res) => {
    //       this.deliveryService.delivery = res as Delivery[];
    //       this.Delivery_deliverer = String(res.delivery_deliverer); 
    //       this.Delivery_location = String(res.delivery_location); 
    //       this.Delivery_price = String(res.delivery_price); 
    //       this.Delivery_count = String(res.delivery_count);


    //       console.log("Delivery =" + this.Delivery_location);

    //       console.log("this.Delivery_deliverer =" + this.Delivery_deliverer);
    //       console.log("this.Delivery_location =" + this.Delivery_location);
    //       console.log("this.Delivery_price =" + this.Delivery_price);
    //       console.log("this.Delivery_count =" + this.Delivery_count);

    //     });
    // });


    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.deliveryService
        // .getOrdersByRestaurant(this.newStrIdRestaurant)
        .GetDeliveryByOrderId(params?.get('id_order'))
        .subscribe((res) => {
          this.deliveryService.delivery = res as Delivery[];
          this.Delivery_deliverer = String(res.delivery_deliverer); 
          this.Delivery_location = String(res.delivery_location); 
          this.Delivery_price = String(res.delivery_price); 
          this.Delivery_count = String(res.delivery_count);
          this.Delivery_date = String(res.delivery_date);
        });
    });
  }


  
}
