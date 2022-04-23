import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sport } from 'src/model/sport';
import *as $ from 'jquery';
import { MatchService } from 'src/services/match.service';

@Component({
  selector: 'app-sporttable',
  templateUrl: './sporttable.component.html',
  styleUrls: ['./sporttable.component.css']
})
export class SporttableComponent implements OnInit {

  newsport =new Sport();
  sport:any;

  ajout:boolean=false;
  id: number;
  


  constructor(private servicematch:  MatchService,
    private route:Router) { }

  ngOnInit(): void {
    this.servicematch.getAllSport().subscribe(data=>{
      this.sport=data;

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
   this.route.navigate(['sport',id])
 
 }

}
