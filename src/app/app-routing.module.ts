import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccuielComponent } from './accueil/accuiel.component';
import { CompteComponent } from './compte/compte.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { AdminComponent } from './admin/admin.component';
import { ParieursComponent } from './parieurs/parieurs.component';
import { ModifierParieurComponent } from './modifier-parieur/modifier-parieur.component';
import { AjoutSportComponent } from './ajout-sport/ajout-sport.component';
import { ModifSportComponent } from './modif-sport/modif-sport.component';
import { AjoutMatchComponent } from './ajout-match/ajout-match.component';
import { InterfaceAdminComponent } from './interface-admin/interface-admin.component';
import { ListeSportsComponent } from './liste-sports/liste-sports.component';
import { ConcoursNaComponent } from './concours-na/concours-na.component';
import { ListeMatchsComponent } from './liste-matchs/liste-matchs.component';
import { SportsComponent } from './sports/sports.component';
import { ConcourProComponent } from './concour-pro/concour-pro.component';
import { CommercialComponent } from './commercial/commercial.component';
import { TechnologieComponent } from './technologie/technologie.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { SporttableComponent } from './sporttable/sporttable.component';
import { MatchtableComponent } from './matchtable/matchtable.component';
import { ModifierMatchComponent } from './modifier-match/modifier-match.component';
import { EquipeComponent } from './equipe/equipe.component';
import { AjoutEquipeComponent } from './ajout-equipe/ajout-equipe.component';
import { ModifierEquipeComponent } from './modifier-equipe/modifier-equipe.component';
import { JoueurComponent } from './joueur/joueur.component';
import { ModifierJoueurComponent } from './modifier-joueur/modifier-joueur.component';
import { AjoutJoueurComponent } from './ajout-joueur/ajout-joueur.component';
import { Matchparieur2Component } from './matchparieur2/matchparieur2.component';



const routes: Routes = [
  {path:'acceuil', component:AccuielComponent },
  {path:'se_connecter',component:CompteComponent},
  {path:'s_inscrire',component:AjouterComponent},
  {path:'s_admine', component:AdminComponent},
  {path:'parieurs', component:ParieursComponent},
  {path:'update_parieur/:id', component:ModifierParieurComponent },
  {path:'ajout_sport', component:AjoutSportComponent},
  {path:'ajout_match', component:AjoutMatchComponent},
  {path:'ajout_equipe', component:AjoutEquipeComponent},
  {path:'update_sport/:id' ,component:ModifSportComponent},
  {path:'update_match/:id' ,component:ModifierMatchComponent},
  {path:'update_equipe/:id' ,component:ModifierEquipeComponent},
  {path:'interfaceAdmin' ,component:InterfaceAdminComponent},
  {path:'listeSports' ,component: SporttableComponent },
  {path:'concour_na' ,component:ConcoursNaComponent },
  {path:'sport/:id' ,component:MatchtableComponent},
  {path:'equipe/:id' ,component:EquipeComponent},
  {path:'sports' ,component:SportsComponent},
  {path:'concour_pro' ,component:ConcourProComponent},
  {path:'commercial' ,component:CommercialComponent},
  {path:'tech' ,component:TechnologieComponent},
  {path:'calendrier' ,component:CalendrierComponent},
  {path:'joeur/:id' ,component:JoueurComponent},
  {path:'update_joueur/:id' ,component:ModifierJoueurComponent},
  {path:'ajout_joueur', component:AjoutJoueurComponent},
  {path:'matchpar', component:Matchparieur2Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
