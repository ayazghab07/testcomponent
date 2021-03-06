import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Admin } from 'src/model/admin';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {


  admin:Admin[];
  verif:Boolean;
public loggedUser:any;
public isloggedIn: boolean = false;

  
 
  
  constructor(private httpclient:HttpClient,private router:Router) { 
      this.httpclient.get("http://127.0.0.1:8092/spring/api/admins").subscribe(
  resp=>{
    this.admin=Object.values(resp);
   
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
    
    SignIn(user: Admin):Boolean{
      let validUser: Boolean = false;
      this.admin.forEach((curUser) => {
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