import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parieur } from 'src/model/parieur';
import { ParieurserService } from 'src/services/parieurser.service';
import *as $ from 'jquery'
@Component({
  selector: 'app-parieurs',
  templateUrl: './parieurs.component.html',
  styleUrls: ['./parieurs.component.css']
})
export class ParieursComponent implements OnInit {

  parieur:any;
  ajout:boolean=false;
  nouvparieur=new Parieur();
  id: number;
  


  constructor(private servicepar: ParieurserService,
    private route:Router) { }

  ngOnInit(): void {
    this.servicepar.getAllParieur().subscribe(data=>{
      this.parieur=data;

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
  ajouterparieur(){
    this.ajout=true;
    console.log(this.ajout);
  }
  annulerajout(){
    this.ajout=false;
  }
  

 Updateparieur(id: number){
  this.route.navigate(['update_parieur',id]) ;

 }
 clickMethod(id, nom) {
  if(confirm("Êtes-vous sûr de vouloir désactiver "+nom)) {
    this.servicepar.onDelete(id).subscribe(data=>{
      console.log(data);
      
      this.ngOnInit();
    })
  }
}
public getparieurs(par){
     

  this.servicepar.getparieur(par).subscribe(data=>{
  this.parieur=data;
  console.log(this.parieur);

})}



}