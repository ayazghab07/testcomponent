import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sport } from 'src/model/sport';
import { MatchService } from 'src/services/match.service';

@Component({
  selector: 'app-interface-admin',
  templateUrl: './interface-admin.component.html',
  styleUrls: ['./interface-admin.component.css']
})
export class InterfaceAdminComponent implements OnInit {

  newsport =new Sport();
  sport:any;

  ajout:boolean=false;
  id: number;
  


  constructor(private servicematch:  MatchService ,
    private route:Router) { }

  ngOnInit(): void {
    this.servicematch.getAllSport().subscribe(data=>{
      this.sport=data;

  } 
  
  );
  
  
}
clickMethod(id, name) {
  if(confirm("Are you sure to delete "+name)) {
    this.servicematch.onDelete(id).subscribe(data=>{
      console.log(data);
      
      this.ngOnInit();
    })
  }
}
Updatesport(id: number){
  this.route.navigate(['update_sport',id]) ;

 }
 plus_de_detailes(id : number){
   this.route.navigate(['match',id])
 
 }
}
