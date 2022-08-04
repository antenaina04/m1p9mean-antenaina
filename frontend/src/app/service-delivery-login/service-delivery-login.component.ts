import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DelivererService } from '../shared/deliverer.service';
import { Deliverer } from '../shared/deliverer.model';

@Component({
  selector: 'app-service-delivery-login',
  templateUrl: './service-delivery-login.component.html',
  styleUrls: ['./service-delivery-login.component.css'],
})
export class ServiceDeliveryLoginComponent implements OnInit {
  loginError: any;

  constructor(
    private _router: Router,
    public delivererService: DelivererService
  ) {}

  ngOnInit(): void {
    localStorage.removeItem('IdDeliverer');
    localStorage.removeItem('deliverer_name');
  }

  GetDelivererByEmailAndPassword(form?: NgForm) {
    // this.obj = JSON.parse(String(this.panier));
    this.delivererService
      .GetDelivererByEmailAndPassword(
        String(this.delivererService.selectedDeliverer.deliverer_email),
        String(this.delivererService.selectedDeliverer.deliverer_password)
      )
      .subscribe((res) => {
        this.delivererService.deliverers = res as Deliverer[];
        console.log(
          'RESPONSA = ' + JSON.stringify(this.delivererService.deliverers)
        );
        if (this.delivererService.deliverers.length != 0) {
          let IdDeliverer = this.delivererService.deliverers.map(
            (deliverer) => deliverer._id
          );
          let deliverer_name = this.delivererService.deliverers.map(
            (deliverer) => deliverer.deliverer_name
          );
          let deliverer_email = this.delivererService.deliverers.map(
            (deliverer) => deliverer.deliverer_email
          );
          console.log('IdDeliverer  == ' + IdDeliverer);
          console.log('deliverer_name  == ' + deliverer_name);
          console.log('deliverer_email  == ' + deliverer_email);

          //=> CreateSessions
          localStorage.setItem(
            'deliverer_name',
            JSON.stringify(deliverer_name)
          );
          localStorage.setItem('IdDeliverer', JSON.stringify(IdDeliverer));
          this._router.navigateByUrl('/delivererAdminMenu-ekaly');
        }
        // => If there is an error on login
        else {
          this.resetLogin();
        }
      });
  }

  resetLogin(form?: NgForm) {
    if (form) form.reset();
    this.delivererService.selectedDeliverer = {
      _id: '',
      deliverer_email: '',
      deliverer_password: '',
    };
    this.loginError =
      "L'adresse email ou le mots de passe ne correspond pas à un compte livreur de e-kaly";
  }
}
