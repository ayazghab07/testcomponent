import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompteComponent } from './compte/compte.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { AdminComponent } from './admin/admin.component';
import { ParieursComponent } from './parieurs/parieurs.component';
import { AccuielComponent } from './accueil/accuiel.component';
import { ModifierParieurComponent } from './modifier-parieur/modifier-parieur.component';
import { AjoutSportComponent } from './ajout-sport/ajout-sport.component';
import { ModifSportComponent } from './modif-sport/modif-sport.component';
import { MatchComponent } from './mat/mat.component';
import { AjoutMatchComponent } from './ajout-match/ajout-match.component';
import { InterfaceAdminComponent } from './interface-admin/interface-admin.component';
import { ListeSportsComponent } from './liste-sports/liste-sports.component';
import { SportComponent } from './sport/sport.component';
import { ConcoursNaComponent } from './concours-na/concours-na.component';


const routes: Routes = [
  {path:'se_connecter',component:CompteComponent},
  {path:'s_inscrire',component:AjouterComponent},
  {path:'s_admine', component:AdminComponent},
  {path:'parieurs', component:ParieursComponent},
  {path:'acceuil', component:AccuielComponent },
  {path:'update_parieur/:id', component:ModifierParieurComponent },
  {path:'ajout_sport', component:AjoutSportComponent},
  {path:'ajout_match', component:AjoutMatchComponent},
  {path:'update_sport/:id' ,component:ModifSportComponent},
  {path:'match/:id' ,component:MatchComponent},
  {path:'interfaceAdmin' ,component:InterfaceAdminComponent},
  {path:'listeSports' ,component:ListeSportsComponent },
  {path:'sports' ,component:SportComponent },
  {path:'concour_na' ,component:ConcoursNaComponent 

},
  

 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
