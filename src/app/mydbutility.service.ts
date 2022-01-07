import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MydbutilityService {

  constructor(private http:HttpClient) { }
  registerUser(name: any,mail: any,pass: any,upi:any):Observable<any>{
    return this.http.get('http://localhost:5000/register?name='+name+'&mail='+mail+'&pass='+pass+'&upi='+upi);
  }
  signIn(mail: any,pass: any):Observable<any>{
    return this.http.get('http://localhost:5000/sign?mail='+mail+'&pass='+pass);
  }
  checkMobile(mail: string,upi: string):Observable<any>{
    return this.http.get('http://localhost:5000/mobile?mail='+mail+'&upi='+upi);
  }
  addMobile(mail: string,phno: string,plan: string):Observable<any>{
    return this.http.get('http://localhost:5000/mobileInsert?mail='+mail+'&phno='+phno+'&plan='+plan);
  }
  checkElectricity(mail: string,upi: string):Observable<any>{
    return this.http.get('http://localhost:5000/electricity?mail='+mail+'&upi='+upi);
  }
  addElectricity(mail: string,phno: string,plan: string):Observable<any>{
    return this.http.get('http://localhost:5000/electricityInsert?mail='+mail+'&phno='+phno+'&plan='+plan);
  }
  registerGas(mail: any,phone: any,plan: any):Observable<any>{
    return this.http.get('http://localhost:5000/registerGas?mail='+mail+'&phone='+phone+'&plan='+plan);
  }
  checkDTH(mail: string,upi: string):Observable<any>{
    return this.http.get('http://localhost:5000/DTH?mail='+mail+'&upi='+upi);
  }
  addDTH(mail: string,phno: string,plan: string,operator: string):Observable<any>{
    return this.http.get('http://localhost:5000/dthInsert?mail='+mail+'&phno='+phno+'&plan='+plan+'&operator='+operator);
  }
  getMobile(mail: string):Observable<any>{
    return this.http.get('http://localhost:5000/getmobile?mail='+mail);
  }
  getEb(mail: string):Observable<any>{
    return this.http.get('http://localhost:5000/geteb?mail='+mail);
  }
  getGas(mail: string):Observable<any>{
    return this.http.get('http://localhost:5000/getgas?mail='+mail);
  }
  getDth(mail: string):Observable<any>{
    return this.http.get('http://localhost:5000/getdth?mail='+mail);
  }
}
