import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/model/admin';
import { AdminServiceService } from 'src/services/admin-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admin = new Admin();
  erreur=0;
  
  constructor(private AdminServiceService:AdminServiceService,
    private router: Router) { }
  ngOnInit(): void {
  }
  onSubmit(f: NgForm)
  {
  
  let isValidUser: Boolean = this.AdminServiceService.SignIn(this.admin);
 if (isValidUser)
 this.router.navigate(['/interfaceAdmin']);
 else
 alert('Email ou mot de passe incorrecte!');
 }
}
