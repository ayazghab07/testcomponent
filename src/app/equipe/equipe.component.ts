import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipe } from 'src/model/equipe';
import { EquipeService } from 'src/services/equipe.service';
import *as $ from 'jquery';
@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  newequipe =new Equipe();
  equipe:any;

  ajout:boolean=false;
  id: number;
  


  constructor(private servicematch:  EquipeService, private route:Router) { }

  ngOnInit(): void {
    this.servicematch.getAllEquipe().subscribe(data=>{
      this.equipe=data;

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
Updateequipe(id: number){
  this.route.navigate(['update_equipe',id]) ;

 }
 plus_de_detailes(id : number){
   this.route.navigate(['joeur',id]) 
 }
}
