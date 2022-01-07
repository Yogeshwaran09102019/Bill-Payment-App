import { Component, OnInit } from '@angular/core';
import { MydbutilityService } from '../mydbutility.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private reg: MydbutilityService, private router:Router) { }

  ngOnInit(): void {
  }

register(event: { preventDefault: () => void; target: any; }){
  event.preventDefault()
  const target=event.target;
  const name=target.querySelector('#name').value;
  const mail=target.querySelector('#mail').value;
  const pass=target.querySelector('#pass').value;
  const upi=target.querySelector('#upi').value;
  this.reg.registerUser(name,mail,pass,upi).subscribe(data =>{
    if(data['message']){
      alert('Registered Successfully');
      this.router.navigate(['home']);
    }
    else
      alert('Error in Registeration');
  })
} 
}
