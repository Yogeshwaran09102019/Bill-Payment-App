import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MydbutilityService } from '../mydbutility.service';
import { SignComponent } from '../sign/sign.component';

@Component({
  selector: 'app-electric-bill',
  templateUrl: './electric-bill.component.html',
  styleUrls: ['./electric-bill.component.css']
})
export class ElectricBillComponent implements OnInit {
username:any;
  constructor(private electricity: MydbutilityService, private router:Router) {
    this.username=SignComponent.exmail;
   }

  ngOnInit(): void {
  }
  ele(event: { preventDefault: () => void; target: any; }){
    event.preventDefault()
    const target=event.target;
    const mail=target.querySelector('#mail').value;
    const upi=target.querySelector('#upi').value;
    const phno=target.querySelector('#phone').value;
    const plan=target.querySelector('#plan').value;
    this.electricity.checkElectricity(mail,upi).subscribe((data: { [x: string]: any; })=>{
      if(data['message'])
        this.electricity.addElectricity(mail,phno,plan).subscribe((data1: { [x: string]: any; })=>{
          if(data1['message']){
            alert('Bill Added!');
            this.router.navigate(['dashboard']);
          }
            
        })
      else
        alert('Invalid mail or UPI');
    })
  }
}
