import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MydbutilityService } from '../mydbutility.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  static exmail:string;
  constructor(private sig: MydbutilityService, private router:Router) { }

  ngOnInit(): void {
  }
sign(event: { preventDefault: () => void; target: any; }){
  event.preventDefault()
  const target=event.target;
  const mail=target.querySelector('#mail').value;
  SignComponent.exmail=mail;
  const pass=target.querySelector('#pass').value;
  this.sig.signIn(mail,pass).subscribe((data: { [x: string]: any; }) =>{
    if(data['message']){
      alert('SignIn Successfully');
      this.router.navigate(['dashboard']);
    }
    else
      alert('Error in Registeration');
  })
}
}
