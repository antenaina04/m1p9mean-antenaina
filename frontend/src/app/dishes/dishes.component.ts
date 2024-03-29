import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { DishesService } from '../shared/dishes.service';
import { Dishes } from '../shared/dishes.model';
import { RestaurantService } from '../shared/restaurant.service';
import { Restaurant } from '../shared/restaurant.model';
import { CartService } from '../cart.service';
import {
  CdkDropList,
  CdkDragDrop,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  // styleUrls: ['./dishes.component.css'],
  providers: [DishesService],
})
export class DishesComponent implements OnInit {
  // totalPrice!: number;
  // obj!: any;
  // nbDishes!: any;
  // panier = localStorage.getItem('panier');
  // cart!:any;


  constructor(
    private _Activatedroute: ActivatedRoute,
    public dishesService: DishesService,
    public restaurantService: RestaurantService,
    private cartService: CartService,
    private _router: Router
  ) {}

  sub: any;

  addToCart(dishes: Dishes) {
    this.cartService.addToCart(dishes);
    // window.alert(dishes.dishes_name + ' ajouté dans le panier!');

    //Refresh page in order to add dishes in order-line-components
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      const url = 'dishes/restaurant/' + params?.get('id_restaurant');
      this._router
        .navigateByUrl('/', {
          skipLocationChange: true,
        })
        .then(() => {
          this._router.navigate([url]);
        });
    });
  }

  ngOnInit(): void {
    // this.obj = JSON.parse(String(this.panier));
    // console.log(this.obj);
    // this.sum();
    // if (
    //   this.obj == null ||
    //   this.obj == undefined ||
    //   this.obj == '' ||
    //   this.obj == '[]'
    // ) {
    //   this.nbDishes = 0;
    //   this.totalPrice = 0;
    // } else {
    //   this.nbDishes = this.obj.length;
    //   this.totalPrice = this.totalPrice;
    // }


    this.getAllDishesByRestaurant();
    this.getRestaurantByIdRestaurant();
  }

  refreshDishesList() {
    this.dishesService.getDishesList().subscribe((res) => {
      this.dishesService.dishes = res as Dishes[];
    });
  }

  getAllDishesByRestaurant() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.dishesService
        .getDishesByRestaurant(params?.get('id_restaurant'))
        .subscribe((res) => {
          this.dishesService.dishes = res as Dishes[];
        });
    });
  }

  getRestaurantByIdRestaurant() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.restaurantService
        .getRestaurantByIdRestaurant(params?.get('id_restaurant'))
        .subscribe((res) => {
          this.restaurantService.selectedRestaurant = res as Restaurant;
        });
    });
  }

  drop(event: CdkDragDrop<Dishes[]>) {
    moveItemInArray(
      this.dishesService.dishes,
      event.previousIndex,
      event.currentIndex
    );
  }
  orderPage() {
    this._router.navigateByUrl('/order');
  }

  // sum(): void {
  //   this.totalPrice = 0;
  //   if (this.obj) {
  //     this.obj.map((_dishes: any) => {
  //       const price: number = _dishes.dishes_price || 0;
  //       this.totalPrice += price;
  //     });
  //   }
  // }
  
}
