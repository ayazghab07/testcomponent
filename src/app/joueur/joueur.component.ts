import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Joueur } from 'src/model/joueur';
import *as $ from 'jquery';
import { JoueurService } from 'src/services/joueur.service';
@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {

  newjoueur =new Joueur();
  joueur:any;

  ajout:boolean=false;
  id: number;
  


  constructor(private servicematch:  JoueurService, private route:Router) { }

  ngOnInit(): void {
    this.servicematch.getAllJoueur().subscribe(data=>{
      this.joueur=data;

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
Updatejoueur(id: number){
  this.route.navigate(['update_joueur',id]) ;

 }
 


}


