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
  styleUrls: ['./insert-dishes.component.css'],
})
export class InsertDishesComponent implements OnInit {
  constructor(
    private _Activatedroute: ActivatedRoute,
    public dishesService: DishesService
  ) {}

  ngOnInit(): void {}

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
    if (this.dishesService.selectedDishes.dishes_name == ''|| this.dishesService.selectedDishes.dishes_name == undefined) {
      console.log('Veuillez remplir dishes_name');
    } else if (this.dishesService.selectedDishes.dishes_desc == ''|| this.dishesService.selectedDishes.dishes_desc == undefined) {
      console.log('Veuillez remplir dishes_desc');
    } else if (this.dishesService.selectedDishes.dishes_price == null || this.dishesService.selectedDishes.dishes_price == 0 || this.dishesService.selectedDishes.dishes_price == undefined) {
      console.log('Veuillez remplir dishes_price');
    } else if (this.dishesService.selectedDishes.id_restaurant == '' || this.dishesService.selectedDishes.id_restaurant == undefined) {
      console.log('Veuillez remplir id_restaurant');
    } else {
      this.dishesService.postDishes(form?.value).subscribe((res) => {
        console.log('-- INSERT DISHES SUCCEEDED --');
        this.resetForm(form);
      });
      console.log('INSERT {[Dishes]} OK');
    }
  }
}
