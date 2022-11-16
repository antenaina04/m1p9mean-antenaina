import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Mail } from './mail.model';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {
  selectedMail: Mail = new Mail();
  mail: Mail[] = [];
  readonly baseURL: 'http://localhost:3000/mailHelper' =
    'http://localhost:3000/mailHelper';



  constructor(private http: HttpClient) { }

  postMail(mail: Mail) {
    return this.http.post(this.baseURL, mail);
  }
}
