import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from 'src/model/equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  nouvEquipe:any=new Equipe();
  

  constructor(private http: HttpClient) { }

  getAllEquipe():Observable<any>{
    return this.http.get("http://localhost:8092/spring/api/equipe");
  }
  getAllEquipeId(equipe):Observable<any>{
    return this.http.get("http://localhost:8092/spring/api/equipe/"+equipe.id);

  }
  addEquipe(newEquipe:Equipe){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(newEquipe);
    return  this.http.post<any>('http://127.0.0.1:8092/spring/api/add-equipe',body,{'headers':headers}).subscribe(data => {
     data.id;
     
 });

  
}
public onDelete(id): Observable<any> {
  console.log(id);
  return this.http.delete<Equipe>("http://127.0.0.1:8092/spring/api/supprim-equipe/"+id);
  
}
public Updateequipe(id: number): Observable<Equipe> {
  
  return this.http.get<Equipe>("http://127.0.0.1:8092/spring/api/equipe/"+id);
}

public Updateequipe2(equipe: Equipe): Observable<Equipe> {
    
  return this.http.post<Equipe>("http://127.0.0.1:8092/spring/api/modifEquipe", equipe);
}
}
