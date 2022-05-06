import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sport } from 'src/model/sport';
import { MatchService } from 'src/services/match.service';

@Component({
  selector: 'app-modif-sport',
  templateUrl: './modif-sport.component.html',
  styleUrls: ['./modif-sport.component.css']
})
export class ModifSportComponent implements OnInit {

  public nouvspo=new Sport;
  id:number;

  constructor(private servicespo:MatchService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.servicespo.Updatesport(this.id).subscribe(data=>{
      this.nouvspo=data;
    })
  }
  onSubmit(){
    this.servicespo.Updatespor2(this.nouvspo).subscribe(data=>{
      this.router.navigate(['/listeSports']);
    })

  }

}
