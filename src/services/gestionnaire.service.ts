import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Gestionnaire } from 'src/model/gestionnaire';

@Injectable({
  providedIn: 'root'
})










export class GestionnaireService {

  gestionnaire:Gestionnaire[];
  verif:Boolean;
public loggedUser:any;
public isloggedIn: boolean = false;

  
 
  
  constructor(private httpclient:HttpClient,private router:Router) { 
      this.httpclient.get("http://127.0.0.1:8090/spring/api/gestionnaire").subscribe(
  resp=>{
    this.gestionnaire=Object.values(resp);
   
  }
  )
  }
  logout() {
    this.isloggedIn= false;
    this.loggedUser = undefined;
       localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/login']);
    }
    
    SignIn(user :Gestionnaire):Boolean{
      let validUser: Boolean = false;
      this.gestionnaire.forEach((curUser) => {
      if(user.email===curUser.email && user.password==curUser.password) {
      validUser = true;
      this.loggedUser = curUser.email;
      this.loggedUser = curUser.password;
      this.isloggedIn = true;
      
      localStorage.setItem('loggedUser',this.loggedUser);
      localStorage.setItem('isloggedIn',String(this.isloggedIn));
      }
      });
      return validUser;
      }
}
