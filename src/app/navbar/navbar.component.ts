import { Component, EventEmitter, OnInit ,Output} from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  show : boolean = false;
  constructor( ) { }
  
  LoginStatus$ : Observable<boolean>;
  UserName$ : Observable<string>;

  ngOnInit(): void {
   // this.LoginStatus$ = this.acct.isLoggesIn;
   // this.UserName$ = this.acct.currentUserName;
  }
  // Script to open and close sidebar
 // Script for side navigation
// onLogout() 
 
 

}

