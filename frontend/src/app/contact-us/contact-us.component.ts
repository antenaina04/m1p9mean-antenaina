import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { MailServiceService } from '../shared/mail-service.service';
import { Mail } from '../shared/mail.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  // styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private _router: Router,
    private _Activatedroute: ActivatedRoute,
    public mailServiceService: MailServiceService) { }

  ngOnInit(): void {
  }

}
