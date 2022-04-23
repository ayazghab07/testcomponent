import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Match } from 'src/model/match';
import { MatchService } from 'src/services/match.service';
import *as $ from 'jquery'
import { Sport } from 'src/model/sport';
@Component({
  selector: 'app-liste-matchs',
  templateUrl: './liste-matchs.component.html',
  styleUrls: ['./liste-matchs.component.css']
})
export class ListeMatchsComponent implements OnInit {

  newmatch =new Match();
  match:any;

  ajout:boolean=false;
  id: number;
  


  constructor(private servicematch:  MatchService, private route:Router) { }

  ngOnInit(): void {
    this.servicematch.getAllMatch().subscribe(data=>{
      this.match=data;

  } 
  
  );
  
  $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
}
clickMethod(id, name) {
  if(confirm("Are you sure to delete "+name)) {
    this.servicematch.onDeleteMatch(id).subscribe(data=>{
      console.log(data);
      
      this.ngOnInit();
    })
  }
}
Updatematch(id: number){
  this.route.navigate(['update_sport',id]) ;

 }
 plus_de_detailes(id : number){
   this.route.navigate(['match',id])
 
 }

}
