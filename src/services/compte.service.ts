/* import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import * as jwt_decode from "jwt-decode";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http : HttpClient, private router : Router) { }

   // Url to access our Web API’s
   private baseUrlLogin : string = "/api/account/login";
   private baseUrlRegister : string = "/api/account/register";

  private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
    private UserName    = new BehaviorSubject<string>(localStorage.getItem('username'));
    private UserRole    = new BehaviorSubject<string>(localStorage.getItem('userRole'));

     //Login Method
     login(username: string, password: string) 
     {
         // pipe() let you combine multiple functions into a single function. 
         // pipe() runs the composed functions in sequence.
         return this.http.post<any>(this.baseUrlLogin, {username, password}).pipe(
 
 
             map(result => {
 
                 // login successful if there's a jwt token in the response
                 if(result && result.token) 
                 {
                       // store user details and jwt token in local storage to keep user logged in between page refreshes
 
                     this.loginStatus.next(true);
                     localStorage.setItem('loginStatus', '1');
                     localStorage.setItem('jwt', result.token);
                     localStorage.setItem('username', result.username);
                     localStorage.setItem('expiration', result.expiration);
                     localStorage.setItem('userRole', result.userRole);
                     this.UserName.next(localStorage.getItem('username'));
                     this.UserRole.next(localStorage.getItem('userRole'));
 
 
                 }
 
                  return result;
 
             })
               
             );
     }
 
     logout() 
     {
         // Set Loginstatus to false and delete saved jwt cookie
         this.loginStatus.next(false);
         localStorage.removeItem('jwt');
         localStorage.removeItem('userRole');
         localStorage.removeItem('username');
         localStorage.removeItem('expiration');
         localStorage.setItem('loginStatus', '0');
         this.router.navigate(['/login']);
         console.log("Logged Out Successfully");
 
     }

    checkLoginStatus() : boolean 
    {
      
        var loginCookie = localStorage.getItem("loginStatus");

        if(loginCookie == "1") 
        {
            if(localStorage.getItem('jwt') === null || localStorage.getItem('jwt') === undefined) 
            {
                return false;
            }

             // Get and Decode the Token
             const token = localStorage.getItem('jwt');
            // const decoded = jwt_decode(token);
            // Check if the cookie is valid

           // if(decoded.exp === undefined) 
            {
                return false;
            }

            // Get Current Date Time
            const date = new Date(0);

             // Convert EXp Time to UTC
           // let tokenExpDate = date.setUTCSeconds(decoded.exp);

            // If Value of Token time greter than 

            //if(tokenExpDate.valueOf() > new Date().valueOf()) 
            {
                return true;
            }

            console.log("NEW DATE " + new Date().valueOf());
           // console.log("Token DATE " + tokenExpDate.valueOf());

            return false;
          
        }
        return false;
    }
    get isLoggesIn() 
    {
        return this.loginStatus.asObservable();
    }

    get currentUserName() 
    {
        return this.UserName.asObservable();
    }

   get currentUserRole() 
    {
        return this.UserRole.asObservable();
    }
}
 */