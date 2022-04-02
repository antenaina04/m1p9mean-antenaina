import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { DishesService } from '../shared/dishes.service';
import { Dishes } from '../shared/dishes.model';

let dishes_name: string;
let dishes_desc: string;
let dishes_price: number;
let restaurant_id: string;


@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
  providers: [DishesService],
})
export class DishesComponent implements OnInit {

  constructor(public dishesService: DishesService) { }

  ngOnInit(): void {
    this.refreshDishesList();
  }

  refreshDishesList(){
    this.dishesService.getDishesList().subscribe((res)=>{
      this.dishesService.dishes = res as Dishes[];
    });
  }

}
