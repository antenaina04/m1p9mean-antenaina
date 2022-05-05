import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../shared/delivery.service';
import { UserService } from '../shared/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../shared/restaurant.service';
import { Restaurant } from '../shared/restaurant.model';
import { User } from '../shared/user.model';
import { OrderService } from '../shared/order.service';
import { Order } from '../shared/order.model';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent implements OnInit {
  Username = localStorage.getItem('Username');
  IdUser = localStorage.getItem('IdUser');
  panier = localStorage.getItem('panier');
  obj!: any;
  newStrIdUser!: any;
  delivery_adress!: string;
  delivery_date!: string;

  // OrderDate
  OrderDate!: any;

  // AmountSummary
  totalPrice!: number;
  Benefice!: number;
  DeliveryCount!: number;
  ShippingCost!: number;
  TotalAmountToPay!: number;

  //NgIF Error Message
  show = false;

  constructor(
    private _Activatedroute: ActivatedRoute,
    public deliveryService: DeliveryService,
    public restaurantService: RestaurantService,
    public userService: UserService,
    public orderService: OrderService,
    private _router: Router
  ) {}
  sub: any;

  ngOnInit(): void {
    if (
      this.Username == null ||
      this.Username == undefined ||
      this.Username == '' ||
      this.Username == 'null'
    ) {
      this._router.navigateByUrl('checkout');
    } else {
      this.obj = JSON.parse(String(this.panier));
      this.sum();
      this.GetUserByIdUser();
      this.GetAdressAndDateDelivery();
      this.GetRestaurantByIdRestaurant();
      this.GetAmountSummary();
      this.GetOrderDate();
    }
  }

  // GetUser
  GetUserByIdUser() {
    var objIdUser = String(this.IdUser).replace('[', '');
    var strIdUser = objIdUser.replace('"', '');
    var lastRemovedCharStrIdUser = strIdUser.replace(']', '');
    this.newStrIdUser = lastRemovedCharStrIdUser.replace('"', '');
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.userService.GetUserByIdUser(this.newStrIdUser).subscribe((res) => {
        this.userService.selectedUser = res as User;
      });
    });
  }
  //GetRestaurant
  GetRestaurantByIdRestaurant() {
    if (this.obj) {
      this.obj.map((_dishes: any) => {
        const id_restaurant: string = _dishes.id_restaurant;
        this.sub = this._Activatedroute.paramMap.subscribe(() => {
          this.restaurantService
            .getRestaurantByIdRestaurant(id_restaurant)
            .subscribe((res) => {
              this.restaurantService.selectedRestaurant = res as Restaurant;
            });
        });
      });
    }
  }

  GetAdressAndDateDelivery() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.delivery_adress = String('xxxx');
      var dateDelivery = new Date(String(params?.get('dateDelivery')));
      var date =
        dateDelivery.getDate() +
        '/' +
        (dateDelivery.getMonth() + 1) +
        '/' +
        dateDelivery.getFullYear();
      var time =
        dateDelivery.getHours() + 'h ' + dateDelivery.getMinutes() + 'min';
      var DateTimeDelivery = date + ' ' + time;
      this.delivery_date = String('...');
    });
  }

  onBlurDeliveryDate() {
    var dateDelivery = new Date(
      String(this.deliveryService.selectedDelivery.delivery_date)
    );

    var date =
      dateDelivery.getDate() +
      '/' +
      (dateDelivery.getMonth() + 1) +
      '/' +
      dateDelivery.getFullYear();
    var time =
      dateDelivery.getHours() + 'h ' + dateDelivery.getMinutes() + 'min';
    var DateTimeDelivery = date + ' ' + time;
    this.delivery_date = String(DateTimeDelivery);
    if (
      String(this.delivery_date) == 'NaN/NaN/NaN NaNh NaNmin' ||
      String(this.delivery_date) == '' ||
      String(this.delivery_date) == null ||
      String(this.delivery_date) == undefined
    ) {
      this.delivery_date = '...';
    } else {
      this.delivery_date = this.delivery_date;
    }
  }
  sum(): void {
    this.totalPrice = 0;
    if (this.obj) {
      this.obj.map((_dishes: any) => {
        const price: number = _dishes.dishes_price || 0;
        this.totalPrice += price;
      });
    }
  }

  GetAmountSummary() {
    var initial_price = 4000;
    var Percentage = 50;

    this.Benefice = this.deliveryService.GetBenefits(initial_price, Percentage);
    this.DeliveryCount = this.deliveryService.DeliveryCount(this.obj.length);
    this.ShippingCost = this.deliveryService.GetShippingCost(
      initial_price,
      Percentage,
      this.DeliveryCount
    );
    this.TotalAmountToPay = this.deliveryService.GetTotalAmountToPay(
      this.totalPrice,
      this.ShippingCost
    );
  }

  GetOrderDate() {
    var today = new Date();
    var date =
      today.getDate() +
      '/' +
      (today.getMonth() + 1) +
      '/' +
      today.getFullYear();
    var time = today.getHours() + 'h ' + today.getMinutes() + 'min';
    var CurrentDate = date + ' ' + time;
    this.OrderDate = String(CurrentDate);
  }
  
  async onSubmitOrder() {
    if (
      this.deliveryService.selectedDelivery.delivery_location == undefined ||
      this.deliveryService.selectedDelivery.delivery_location == null ||
      this.deliveryService.selectedDelivery.delivery_location == '' ||
      this.deliveryService.selectedDelivery.delivery_date == undefined ||
      this.deliveryService.selectedDelivery.delivery_date == null ||
      this.deliveryService.selectedDelivery.delivery_date == ''
    ) {
      this.show = true;
      var ErrorMessage =
        "Veuillez completer l'information de la livaison de votre commmande ! Merci.";
      console.log(ErrorMessage);
    } else {
      //Save Order and OrderDetails and Delivery
      var data = {
        id_user: this.newStrIdUser,
        order_price: this.totalPrice,
        cart: this.panier,
        delivery_date: this.deliveryService.selectedDelivery.delivery_date,
        delivery_location:
          this.deliveryService.selectedDelivery.delivery_location,
        delivery_price: this.ShippingCost,
      }; // Set JSON Data
      this.orderService.postOrder(data).subscribe((res) => {
        this._router.navigateByUrl('orderList');
      });

      await localStorage.removeItem('panier');
    }
  }
}
