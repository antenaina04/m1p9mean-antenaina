import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-restaurant-admin-menu',
  templateUrl: './restaurant-admin-menu.component.html',
  styleUrls: ['./restaurant-admin-menu.component.css']
})
export class RestaurantAdminMenuComponent implements OnInit {
  
  IdRestaurant = localStorage.getItem('IdRestaurant');
  constructor(private _router: Router) { }

  ngOnInit(): void {

    if (
      this.IdRestaurant == null ||
      this.IdRestaurant == undefined ||
      this.IdRestaurant == '' ||
      this.IdRestaurant == 'null'
    ) {
      this._router.navigateByUrl('/loginRestaurant-ekaly');
    } else {
      this._router.navigateByUrl('/restaurantAdminMenu-ekaly');
    }
  }

}
