import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from 'src/model/match';
import { Sport } from 'src/model/sport';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  
  nouvMatch:any=new Match();
  nouvSport:any=new Sport();

  constructor(private http: HttpClient) { }

  getAllSport():Observable<any>{
    return this.http.get("http://localhost:8092/spring/api/sports");
  }
  getAllSportId(sport):Observable<any>{
    return this.http.get("http://localhost:8092/spring/api/sport/"+sport.id);

  }
  addSport(newSport:Sport){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(newSport);
    return  this.http.post<any>('http://127.0.0.1:8092/spring/api/add-Sport',body,{'headers':headers}).subscribe(data => {
     data.id;
     
 });

  
}

getAllMatch():Observable<any>{
  return this.http.get("http://localhost:8092/spring/api/paris");

}
public getmatch(mat){
  return this.http.get("http://127.0.0.1:8092/spring/api/pari/"+mat.id);
}
addMatch(newMatch:Match){
  const headers = { 'content-type': 'application/json'}  
  const body=JSON.stringify(newMatch);
  return  this.http.post<any>('http://127.0.0.1:8092/spring/api/add-pari',body,{'headers':headers}).subscribe(data => {
   data.id;
   
});


}
public onDelete(id): Observable<any> {
  console.log(id);
  return this.http.delete<Sport>("http://127.0.0.1:8092/spring/api/supprim-sport/"+id);
  
}
public onDeleteMatch(id): Observable<any> {
  console.log(id);
  return this.http.delete<Match>("http://127.0.0.1:8092/spring/api/supprim-pari/"+id);
  
}
public Updatesport(id: number): Observable<Sport> {
  
  return this.http.get<Sport>("http://127.0.0.1:8092/spring/api/sport/"+id);
}
public Updatesport2(id: number, sport: Sport): Observable<Sport> {
  
  return this.http.put<Sport>("http://127.0.0.1:8092/spring/api/sport/"+id, sport);
}
}
