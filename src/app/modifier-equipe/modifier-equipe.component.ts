import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from 'src/model/equipe';
import { EquipeService } from 'src/services/equipe.service';

@Component({
  selector: 'app-modifier-equipe',
  templateUrl: './modifier-equipe.component.html',
  styleUrls: ['./modifier-equipe.component.css']
})
export class ModifierEquipeComponent implements OnInit {

  public nouvequipe=new Equipe;
  id:number;

  constructor(private servicespo:EquipeService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.servicespo.Updateequipe(this.id).subscribe(data=>{
      this.nouvequipe=data;
    })
  }
  onSubmit(){
    this.servicespo.Updateequipe2(this.nouvequipe).subscribe(data=>{
      this.router.navigate(['/equipe/id']);
    })

  }

}
