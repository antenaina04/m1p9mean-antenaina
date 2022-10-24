import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';

  show: any;
  IdUser: any;

  constructor(private _router: Router) {}
  login() {
    localStorage.clear();
    localStorage.removeItem('IdUser');
    localStorage.removeItem('Username');
    this._router.navigateByUrl('/login');
  }

  GetOrderList() {
    if (
      localStorage.getItem('IdUser') == null ||
      localStorage.getItem('IdUser') == '' ||
      localStorage.getItem('IdUser') == undefined
    ) {
      this._router.navigateByUrl('/login');
    } else {
      // console.log("Info = " + "OrderList doit être affiché")
      this._router.navigateByUrl('/orderList');
    }
  }
}
