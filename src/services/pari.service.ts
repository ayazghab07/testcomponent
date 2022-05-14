import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pari } from 'src/model/pari';
@Injectable({
  providedIn: 'root'
})
export class PariService {

  constructor(private http: HttpClient) { }

  getAllParis():Observable<any>{
    return this.http.get("http://localhost:8090/spring/api/paris");
  }
  getPariId(pari):Observable<any>{
    return this.http.get("http://localhost:8090/spring/api/pari/"+pari.id);

  }
  public getpariid(id: number): Observable<Pari> {
  

    return this.http.get<Pari>("http://127.0.0.1:8092/spring/api/pari/"+id);
    
  }
}
