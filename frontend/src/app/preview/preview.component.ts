import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../shared/delivery.service';
import { UserService } from '../shared/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../shared/restaurant.service';
import { Restaurant } from '../shared/restaurant.model';
import { User } from '../shared/user.model';

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



  constructor(
    private _Activatedroute: ActivatedRoute,
    public deliveryService: DeliveryService,
    public restaurantService: RestaurantService,
    public userService: UserService
  ) {}
  sub: any;

  ngOnInit(): void {
    this.obj = JSON.parse(String(this.panier));
    this.sum();
    this.GetUserByIdUser();
    this.GetAdressAndDateDelivery();
    this.GetRestaurantByIdRestaurant();
    this.GetAmountSummary();
    this.GetOrderDate();
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
      this.delivery_adress = String(params?.get('adressDelivery'));
      // var deliveryDate = String(params?.get('dateDelivery'));
      // new Date(dateString)
      var dateDelivery = new Date(String(params?.get('dateDelivery')));
      var date = dateDelivery.getDate()+'/'+(dateDelivery.getMonth()+1)+'/'+dateDelivery.getFullYear();
      var time = dateDelivery.getHours() + "h " + dateDelivery.getMinutes() + "min";
      var DateTimeDelivery = date+' '+time
      this.delivery_date = String(DateTimeDelivery);
    });
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

   this.Benefice =  this.deliveryService.GetBenefits(initial_price, Percentage);
   this.DeliveryCount = this.deliveryService.DeliveryCount(this.obj.length);   
   this.ShippingCost = this.deliveryService.GetShippingCost(initial_price, Percentage, this.DeliveryCount);
   this.TotalAmountToPay = this.deliveryService.GetTotalAmountToPay(this.totalPrice, this.ShippingCost);
  }

  GetOrderDate() {
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    var time = today.getHours() + "h " + today.getMinutes() + "min";
    var CurrentDate = date+' '+time
    this.OrderDate = String(CurrentDate);
  }
}
