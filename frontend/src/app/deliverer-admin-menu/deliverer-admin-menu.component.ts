import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deliverer-admin-menu',
  templateUrl: './deliverer-admin-menu.component.html',
  // styleUrls: ['./deliverer-admin-menu.component.css']
})
export class DelivererAdminMenuComponent implements OnInit {
  IdDeliverer = localStorage.getItem('IdDeliverer');
  constructor(private _router: Router) { }

  ngOnInit(): void {
    if (
      this.IdDeliverer == null ||
      this.IdDeliverer == undefined ||
      this.IdDeliverer == '' ||
      this.IdDeliverer == 'null'
    ) {
      this._router.navigateByUrl('/loginServiceDelivery-ekaly');
    } else {
      this._router.navigateByUrl('/delivererAdminMenu-ekaly');
    }
  }

}
