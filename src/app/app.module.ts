import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CompteComponent } from './compte/compte.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ParieursComponent } from './parieurs/parieurs.component';
import { AccuielComponent } from './accueil/accuiel.component';
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





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CompteComponent,
    AjouterComponent,
    ParieursComponent,
    AccuielComponent,
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
