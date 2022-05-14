import { Equipe } from "./equipe";
import { Joueur } from "./joueur";

export class Pari{
    date_match :Date ;
    nom:string;
    pari_montant:string;
    temp_deb:string;
    temp_fin:string ;
    joueur : Joueur[];
    equipe : Equipe[];
  }