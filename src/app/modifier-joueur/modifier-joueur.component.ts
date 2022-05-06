import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Joueur } from 'src/model/joueur';
import { JoueurService } from 'src/services/joueur.service';

@Component({
  selector: 'app-modifier-joueur',
  templateUrl: './modifier-joueur.component.html',
  styleUrls: ['./modifier-joueur.component.css']
})
export class ModifierJoueurComponent implements OnInit {

  
  public nouvjoueur=new Joueur;
  id:number;

  constructor(private servicespo:JoueurService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.servicespo.Updatejoueur(this.id).subscribe(data=>{
      this.nouvjoueur=data;
    })
  }
  onSubmit(){
    this.servicespo.Updatejoueur2(this.nouvjoueur).subscribe(data=>{
      this.router.navigate(['/joeur/id']);
    })

  }

}
