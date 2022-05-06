import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Equipe } from 'src/model/equipe';
import { EquipeService } from 'src/services/equipe.service';

@Component({
  selector: 'app-ajout-equipe',
  templateUrl: './ajout-equipe.component.html',
  styleUrls: ['./ajout-equipe.component.css']
})
export class AjoutEquipeComponent implements OnInit {

  nouvequipe=new Equipe();
  
  message: string | undefined;
   constructor(private httpClient:HttpClient,private EquipeService: EquipeService,private router:Router) { }
   confirmationString:String ="New sport has been added";  
    isAdded:boolean=false;
   ngOnInit(): void {
   }
  
       onSubmit(f: NgForm) {
         
         console.log(this.nouvequipe);
         this.EquipeService.addEquipe(this.nouvequipe);  
         window.alert("Equipe est ajouté !");
         this.router.navigate(['equipe/:id']);
         isAdded:true;
 
        
        }
}
