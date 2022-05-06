import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joueur } from 'src/model/joueur';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  nouvjoueur:any=new Joueur();
  

  constructor(private http: HttpClient) { }

  getAllJoueur():Observable<any>{
    return this.http.get("http://localhost:8092/spring/api/Joueur");
  }
  getAllJoueurId(joueur):Observable<any>{
    return this.http.get("http://localhost:8092/spring/api/joueur/"+joueur.id);

  }
  addJoueur(newJoueur:Joueur){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(newJoueur);
    return  this.http.post<any>('http://127.0.0.1:8092/spring/api/add-joueur',body,{'headers':headers}).subscribe(data => {
     data.id;
     
 });

  
}
public onDelete(id): Observable<any> {
  console.log(id);
  return this.http.delete<Joueur>("http://127.0.0.1:8092/spring/api/supprim-joueur/"+id);
  
}
public Updatejoueur(id: number): Observable<Joueur> {
  
  return this.http.get<Joueur>("http://127.0.0.1:8092/spring/api/joueur/"+id);
}

public Updatejoueur2(joueur: Joueur): Observable<Joueur> {
    
  return this.http.post<Joueur>("http://127.0.0.1:8092/spring/api/modif-joueur", joueur);
}
}
