import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MydbutilityService } from '../mydbutility.service';
import { SignComponent } from '../sign/sign.component';

@Component({
  selector: 'app-book-cylinder',
  templateUrl: './book-cylinder.component.html',
  styleUrls: ['./book-cylinder.component.css']
})
export class BookCylinderComponent implements OnInit {
username:any;
  constructor(private reg: MydbutilityService, private router:Router) {
    this.username=SignComponent.exmail;
   }

  ngOnInit(): void {
  }
  gas(event: { preventDefault: () => void; target: any; }){
    event.preventDefault()
    const target=event.target;
    const mail=target.querySelector('#mail').value;
    const phone=target.querySelector('#phone').value;
    const plan=target.querySelector('#plan').value;
    this.reg.registerGas(mail,phone,plan).subscribe(data =>{
      if(data['message']){
        alert('Registered Successfully');
        this.router.navigate(['dashboard']);
      }
      else
        alert('Error in Registeration');
    })
  }
}
