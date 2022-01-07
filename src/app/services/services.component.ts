import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MydbutilityService } from '../mydbutility.service';
import { SignComponent } from '../sign/sign.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
username:any;
card1:boolean=true;
mobileFlag:boolean=false;
ebFlag:boolean=false;
  gasFlag: boolean=false;
  dthFlag:boolean=false;
  constructor(private reg:MydbutilityService) {
    this.username=SignComponent.exmail;
   }

  ngOnInit(): void {
  }
  output:any;
generate(mail:any){
  this.reg.getMobile(mail).subscribe((data: { [x: string]: any; }) =>{
    this.output=data['result'];
    this.card1=false;
    this.mobileFlag=true;
  })
}

generateEb(mail:any){
  this.reg.getEb(mail).subscribe((data: { [x: string]: any; }) =>{
    this.output=data['result'];
    this.card1=false;
    this.ebFlag=true;
  })
}

generateGas(mail:any){
  this.reg.getGas(mail).subscribe((data: { [x: string]: any; }) =>{
    this.output=data['result'];
    this.card1=false;
    this.gasFlag=true;
  })
}

generateDth(mail:any){
  this.reg.getDth(mail).subscribe((data: { [x: string]: any; }) =>{
    this.output=data['result'];
    this.card1=false;
    this.dthFlag=true;
  })
}

back(){
this.mobileFlag=false;
this.ebFlag=false;
this.gasFlag=false;
this.dthFlag=false;
this.card1=true;
}
}
