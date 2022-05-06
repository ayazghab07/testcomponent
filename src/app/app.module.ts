import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse, HttpResponseBase } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccuielComponent } from './accueil/accuiel.component';
import { FooterComponent } from './footer/footer.component';
import { CompteComponent } from './compte/compte.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ParieursComponent } from './parieurs/parieurs.component';
import { ModifierParieurComponent } from './modifier-parieur/modifier-parieur.component';
import { AjoutSportComponent } from './ajout-sport/ajout-sport.component';
import { ModifSportComponent } from './modif-sport/modif-sport.component';
import { AjoutMatchComponent } from './ajout-match/ajout-match.component';
import { AdminComponent } from './admin/admin.component';
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





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccuielComponent,
    FooterComponent,
    CompteComponent,
    AjouterComponent,
    ParieursComponent,
    ModifierParieurComponent,
    AjoutSportComponent,
    ModifSportComponent,
    AjoutMatchComponent,
    AdminComponent,
    InterfaceAdminComponent,
    ListeSportsComponent,
    ConcoursNaComponent,
    ListeMatchsComponent,
    SportsComponent,
    ConcourProComponent,
    CommercialComponent,
    TechnologieComponent,
    CalendrierComponent,
    SporttableComponent,
    MatchtableComponent,
    ModifierMatchComponent,
    EquipeComponent,
    AjoutEquipeComponent,
    ModifierEquipeComponent,
    JoueurComponent,
    ModifierJoueurComponent,
    AjoutJoueurComponent,
    Matchparieur2Component,
    
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
{

}
