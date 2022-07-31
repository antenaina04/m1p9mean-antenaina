import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { DelivererService } from '../shared/deliverer.service';
import { Deliverer } from '../shared/deliverer.model';

@Component({
  selector: 'app-insert-deliverer',
  templateUrl: './insert-deliverer.component.html',
  styleUrls: ['./insert-deliverer.component.css']
})
export class InsertDelivererComponent implements OnInit {

  constructor(
    private _Activatedroute: ActivatedRoute,
    public delivererService: DelivererService) { }

  ngOnInit(): void {
  }

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.delivererService.selectedDeliverer = {
      _id: '',
      deliverer_name: '',
      deliverer_email: '',
      deliverer_phone: '',
      deliverer_password: '',
    };
  }

  onSubmit(form?: NgForm) {
    // console.log(this.delivererService.selectedDeliverer.restaurant_name);
    // console.log(this.delivererService.selectedDeliverer.restaurant_location);
    // console.log(this.delivererService.selectedDeliverer.restaurant_phone);
    if (
      this.delivererService.selectedDeliverer.deliverer_name == '' ||
      this.delivererService.selectedDeliverer.deliverer_name == undefined
    ) {
      console.log('Veuillez remplir deliverer_name');
    } else if (
      this.delivererService.selectedDeliverer.deliverer_email == '' ||
      this.delivererService.selectedDeliverer.deliverer_email == undefined
    ) {
      console.log('Veuillez remplir deliverer_email');
    } else if (
      this.delivererService.selectedDeliverer.deliverer_phone == null ||
      this.delivererService.selectedDeliverer.deliverer_phone == undefined
    ) {
      console.log('Veuillez remplir deliverer_phone');
    } 
    else if (
      this.delivererService.selectedDeliverer.deliverer_password == null ||
      this.delivererService.selectedDeliverer.deliverer_password == undefined
    ) {
      console.log('Veuillez remplir deliverer_password');
    } 
    else {
      console.log(
        'okaaayyy eee===' +
          JSON.stringify(this.delivererService.selectedDeliverer._id)
      );

      this.delivererService.postDeliverer(form?.value).subscribe((res) => {
        console.log('-- INSERT DELIVERER SUCCEEDED --');
        this.resetForm(form);
      });
      console.log('INSERT {[Deliverer]} OK');
    }
  }


}
