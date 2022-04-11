import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Match } from 'src/model/match';
import { MatchService } from 'src/services/match.service';

@Component({
  selector: 'app-match',
  templateUrl: './mat.component.html',
  styleUrls: ['./mat.component.css']
})
export class MatchComponent implements OnInit {

  mat:any;
  ajout:boolean=false;
  nouvmatch=new Match();
  id: number;
  


  constructor(private servicepar: MatchService,
    private route:Router) { }

  ngOnInit(): void {
    this.servicepar.getAllMatch().subscribe(data=>{
      this.mat=data;

  } 
  
  );
  
}
clickMethod(id, nom) {
  if(confirm("Êtes-vous sûr de vouloir désactiver "+nom)) {
    this.servicepar.onDeleteMatch(id).subscribe(data=>{
      console.log(data);
      
      this.ngOnInit();
    })
  }
}
  
public getmatchs(mat){
     

  this.servicepar.getmatch(mat).subscribe(data=>{
  this.mat=data;
  console.log(this.mat);

})}


  

}