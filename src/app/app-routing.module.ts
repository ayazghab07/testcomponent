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
import { AjoutMatchComponent } from './ajout-match/ajout-match.component';
import { InterfaceAdminComponent } from './interface-admin/interface-admin.component';
import { ListeSportsComponent } from './liste-sports/liste-sports.component';
import { ConcoursNaComponent } from './concours-na/concours-na.component';
import { ListeMatchsComponent } from './liste-matchs/liste-matchs.component';
import { SportsComponent } from './sports/sports.component';


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
  {path:'interfaceAdmin' ,component:InterfaceAdminComponent},
  {path:'listeSports' ,component:ListeSportsComponent },
  {path:'concour_na' ,component:ConcoursNaComponent },
  {path:'sport/:id' ,component:ListeMatchsComponent},
  {path:'sports' ,component:SportsComponent},

 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
