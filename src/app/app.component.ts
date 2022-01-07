import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bills';
  viewFlag:boolean=true;
  click(){
    this.viewFlag=false;
  }
}
