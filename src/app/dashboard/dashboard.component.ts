import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignComponent } from '../sign/sign.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
username:any;
  constructor(private router:Router) {
    this.username=SignComponent.exmail;
   }

  ngOnInit(): void {
  }
change(){
  this.router.navigate(['home']);
}
}
