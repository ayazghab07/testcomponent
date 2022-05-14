import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parieur } from 'src/model/parieur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParieurserService {
  nouvParieur:any=new Parieur();

  constructor(private http: HttpClient) { }

  
  

  addParieur(newParieur:Parieur){
    //console.warn(JSON.stringify(newAdmin));
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(newParieur);
    return  this.http.post<any>('http://127.0.0.1:8090/spring/api/add-parieur',body,{'headers':headers}).subscribe(data => {
     data.id;
     
 });
 
 
  }

  getAllParieur():Observable<any>{
    return this.http.get("http://localhost:8090/spring/api/parieurs");

  }
  public getparieur(par){
    return this.http.get("http://127.0.0.1:8090/spring/api/parieur/"+par.id);
  }
  public onDelete(id): Observable<any> {
    console.log(id);
    return this.http.delete<Parieur>("http://127.0.0.1:8090/spring/api/supprim-parieur/"+id);
    
  }
 
  public Updateparieur(id: number): Observable<Parieur> {
  
    return this.http.get<Parieur>("http://127.0.0.1:8090/spring/api/parieur/"+id);
  }
  public Updatepar2(parieur: Parieur): Observable<Parieur> {
    
    return this.http.post<Parieur>("http://127.0.0.1:8090/spring/api/modif-parieur", parieur);
  }
  
}