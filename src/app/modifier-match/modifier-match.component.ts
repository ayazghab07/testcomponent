import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Match } from 'src/model/match';
import { MatchService } from 'src/services/match.service';

@Component({
  selector: 'app-modifier-match',
  templateUrl: './modifier-match.component.html',
  styleUrls: ['./modifier-match.component.css']
})
export class ModifierMatchComponent implements OnInit {

  public nouvmatch=new Match;
  id:number;

  constructor(private servicespo:MatchService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.servicespo.Updatematch(this.id).subscribe(data=>{
      this.nouvmatch=data;
    })
  }
  onSubmit(){
    this.servicespo.Updatmatch2(this.nouvmatch).subscribe(data=>{
      this.router.navigate(['/sport/id']);
    })

  }

}
