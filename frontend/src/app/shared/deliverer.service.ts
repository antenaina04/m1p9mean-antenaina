import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deliverer } from './deliverer.model';


@Injectable({
  providedIn: 'root'
})
export class DelivererService {
  selectedDeliverer: Deliverer = new Deliverer();
  deliverers: Deliverer[] = [];
  email: any;
  password: any;

  readonly baseURL: 'https://m1p9mean-antenaina-backend.herokuapp.com/deliverers' =
    'https://m1p9mean-antenaina-backend.herokuapp.com/deliverers';


  constructor(private http: HttpClient) { }


  postDeliverer(deliverer: Deliverer) {
    return this.http.post(this.baseURL, deliverer);
  }


  GetDelivererByEmailAndPassword(
    deliverer_email: string | null,
    deliverer_password: string | null
  ): Observable<Deliverer[]> {
    return this.http.get<Deliverer[]>(
      this.baseURL + `/check_deliverer/` + deliverer_email + `/deliverer/` + deliverer_password
    );
  }

  GetDelivererByIdDeliverer(
    id_deliverer: string | null
  ): Observable<Deliverer> {
    return this.http.get<Deliverer>(this.baseURL + `/` + id_deliverer);
  }


}
