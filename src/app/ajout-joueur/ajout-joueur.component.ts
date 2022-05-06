import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Joueur } from 'src/model/joueur';
import { JoueurService } from 'src/services/joueur.service';

@Component({
  selector: 'app-ajout-joueur',
  templateUrl: './ajout-joueur.component.html',
  styleUrls: ['./ajout-joueur.component.css']
})
export class AjoutJoueurComponent implements OnInit {

  nouvjoueur=new Joueur();
  
  message: string | undefined;
   constructor(private httpClient:HttpClient,private JoueurService: JoueurService,private router:Router) { }
   confirmationString:String ="New Joueur has been added";  
    isAdded:boolean=false;
   ngOnInit(): void {
   }
  
       onSubmit(f: NgForm) {
         
         console.log(this.nouvjoueur);
         this.JoueurService.addJoueur(this.nouvjoueur);  
         window.alert("Joueur est ajouté !");
         this.router.navigate(['joeur/:id']);
         isAdded:true;
 
        
        }
}

