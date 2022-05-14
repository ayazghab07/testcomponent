import { JoueurComponent } from "src/app/joueur/joueur.component";
import { Joueur } from "./joueur";

export class Equipe{
  nom:string;
  description:string;
  type:string;
  niveau:BigInteger;
  res1:string;
  res2:string;
  res3:string;
  image:string;
  joueur : Joueur[];
}