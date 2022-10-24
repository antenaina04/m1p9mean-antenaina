import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { DishesService } from '../shared/dishes.service';
import { Dishes } from '../shared/dishes.model';

let id_restaurant: string;
let dishes_name: string;
let dishes_desc: string;
let dishes_price: string;

@Component({
  selector: 'app-insert-dishes',
  templateUrl: './insert-dishes.component.html',
  // styleUrls: ['./insert-dishes.component.css'],
})
export class InsertDishesComponent implements OnInit {
  IdRestaurant = localStorage.getItem('IdRestaurant');
  objIdRestaurant = String(this.IdRestaurant).replace('[', '');
  strIdRestaurant = this.objIdRestaurant.replace('"', '');
  lastRemovedCharStrIdRestaurant = this.strIdRestaurant.replace(']', '');
  newStrIdRestaurant = this.lastRemovedCharStrIdRestaurant.replace('"', '');
  
  constructor(
    private _Activatedroute: ActivatedRoute,
    public dishesService: DishesService
    ) {}
    
    ngOnInit(): void {
    this.refreshDishesList();
  }

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.dishesService.selectedDishes = {
      _id: '',
      id_restaurant: '',
      dishes_name: '',
      dishes_desc: '',
      dishes_price: 0,
    };
  }

  onSubmit(form?: NgForm) {
    console.log(this.dishesService.selectedDishes.id_restaurant);
    console.log(this.dishesService.selectedDishes.dishes_name);
    console.log(this.dishesService.selectedDishes.dishes_desc);
    console.log(this.dishesService.selectedDishes.dishes_price);
    if (
      this.dishesService.selectedDishes.dishes_name == '' ||
      this.dishesService.selectedDishes.dishes_name == undefined
    ) {
      console.log('Veuillez remplir dishes_name');
    } else if (
      this.dishesService.selectedDishes.dishes_desc == '' ||
      this.dishesService.selectedDishes.dishes_desc == undefined
    ) {
      console.log('Veuillez remplir dishes_desc');
    } else if (
      this.dishesService.selectedDishes.dishes_price == null ||
      this.dishesService.selectedDishes.dishes_price == 0 ||
      this.dishesService.selectedDishes.dishes_price == undefined
    ) {
      console.log('Veuillez remplir dishes_price');
    }
    else {
      console.log(
        'okaaayyy eee===' +
          JSON.stringify(this.dishesService.selectedDishes._id)
      );

      if (
        this.dishesService.selectedDishes._id == '' ||
        this.dishesService.selectedDishes._id == undefined
      ) {

        var data = {
          id_restaurant :this.newStrIdRestaurant,
          dishes_name :this.dishesService.selectedDishes.dishes_name,
          dishes_desc :this.dishesService.selectedDishes.dishes_desc,
          dishes_price :this.dishesService.selectedDishes.dishes_price,
        };
        this.dishesService.postDishes(data).subscribe((res) => {
          console.log('-- INSERT DISHES SUCCEEDED --');
          this.resetForm(form);
          this.refreshDishesList();
        });
        console.log('INSERT {[Dishes]} OK');
      } else {
        this.dishesService
          .putDishes(form?.value, this.dishesService.selectedDishes._id)
          .subscribe((res) => {
            //Doesn't work
            console.log('-- UPDATE DISHES SUCCEEDED --');
            this.resetForm(form);
            this.refreshDishesList();
          });
        console.log('UPDATE {[Dishes]} OK');
      }
    }
  }

  refreshDishesList() {
    this.dishesService.getDishesByRestaurant(this.newStrIdRestaurant).subscribe((res) => {
      this.dishesService.dishes = res as Dishes[];
    });
  }

  onEdit(dishes: Dishes) {
    // console.log('DISHES ::'+ JSON.stringify(this.dishesService.selectedDishes)); //Tsisy raha ato
    this.dishesService.selectedDishes = dishes;
  }

  search(form?: NgForm) {
    // console.log(form?.value.dishes_name_search);
    if (
      form?.value.dishes_name_search == '' ||
      form?.value.dishes_name_search == undefined
    ) {
      // console.log("REFRESY");
      this.refreshDishesList();
    } else {
      this.dishesService
        .GetDishesByDishesName(
          String(this.dishesService.selectedDishes.dishes_name_search)
        )
        .subscribe((res) => {
          this.dishesService.dishes = res as Dishes[];
          // console.log("okaaayyy eee==="+JSON.stringify(this.restaurantService.selectedRestaurant));
        });
    }
  }
}
