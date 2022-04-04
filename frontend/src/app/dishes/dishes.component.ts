import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { DishesService } from '../shared/dishes.service';
import { Dishes } from '../shared/dishes.model';

let dishes_name: string;
let dishes_desc: string;
let dishes_price: number;
// let restaurant_id: string;

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
  providers: [DishesService],
})
export class DishesComponent implements OnInit {
  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    public dishesService: DishesService
  ) {}

  restaurant_id: any;
  sub: any;
  ngOnInit(): void {
    this.getAllDishesByRestaurant();
  }

  refreshDishesList() {
    this.dishesService.getDishesList().subscribe((res) => {
      this.dishesService.dishes = res as Dishes[];
    });
  }

  getAllDishesByRestaurant() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      console.log('Paramsa = ' + JSON.stringify(params));
      console.log(
        'ILAY ID TADIAVINA TSY METY MIVOAKA = ' + params?.get('id_restaurant')
      );

      this.dishesService
        .getDishesByRestaurant(params?.get('id_restaurant'))
        .subscribe((res) => {
          this.dishesService.dishes = res as Dishes[];
        });
    });
  }
}
