import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MydbutilityService } from '../mydbutility.service';
import { SignComponent } from '../sign/sign.component';

@Component({
  selector: 'app-dth-bill',
  templateUrl: './dth-bill.component.html',
  styleUrls: ['./dth-bill.component.css']
})
export class DthBillComponent implements OnInit {
username:any;
  constructor(private dthBill: MydbutilityService, private router:Router) {
    this.username=SignComponent.exmail;
   }

  ngOnInit(): void {
  }
  dth(event: { preventDefault: () => void; target: any; }){
    event.preventDefault()
    const target=event.target;
    const mail=target.querySelector('#mail').value;
    const upi=target.querySelector('#upi').value;
    const phno=target.querySelector('#phone').value;
    const operator=target.querySelector('#operator').value;
    const plan=target.querySelector('#plan').value;
    this.dthBill.checkDTH(mail,upi).subscribe((data: { [x: string]: any; })=>{
      if(data['message'])
        this.dthBill.addDTH(mail,phno,plan,operator).subscribe((data1: { [x: string]: any; })=>{
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
