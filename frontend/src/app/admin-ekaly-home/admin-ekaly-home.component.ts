import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-admin-ekaly-home',
  templateUrl: './admin-ekaly-home.component.html',
  styleUrls: ['./admin-ekaly-home.component.css']
})
export class AdminEkalyHomeComponent implements OnInit {

  IdUserAdmin = localStorage.getItem('IdUserAdmin');
  newStrIdUserAdmin!: any;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    if (
      this.IdUserAdmin == null ||
      this.IdUserAdmin == undefined ||
      this.IdUserAdmin == '' ||
      this.IdUserAdmin == 'null'
    ) {
      this._router.navigateByUrl('/admin1234');
    } else {
      var objIdUserAdmin = String(this.IdUserAdmin).replace('[', '');
      var strIdUserAdmin = objIdUserAdmin.replace('"', '');
      var lastRemovedCharStrIdUserAdmin = strIdUserAdmin.replace(']', '');
      this.newStrIdUserAdmin = lastRemovedCharStrIdUserAdmin.replace('"', '');
      this._router.navigateByUrl(
        '/admin1234-home'
      );
    }
    
  }

}
