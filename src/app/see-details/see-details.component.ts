import { Component, OnInit } from '@angular/core';
import { Match } from 'src/model/match';
import { Router } from '@angular/router';
import { Sport } from 'src/model/sport';
import { MatchService } from 'src/services/match.service';
import *as $ from 'jquery'
import { Equipe } from 'src/model/equipe';
import { EquipeService } from 'src/services/equipe.service';
import { PariService } from 'src/services/pari.service';
@Component({
  selector: 'app-see-details',
  templateUrl: './see-details.component.html',
  styleUrls: ['./see-details.component.css']
})
export class SeeDetailsComponent implements OnInit {

  newsport =new Equipe();
  equipe:any;
  pari:any;
  ajout:boolean=false;
  id: number;
  


  constructor(
    private route:Router , private PariService : PariService ) { }

  ngOnInit(): void {
  
  this.PariService .getAllParis().subscribe(data=>{
    this.pari=data;

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


}
