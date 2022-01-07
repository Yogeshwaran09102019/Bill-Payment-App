import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { SignComponent } from './sign/sign.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MydbutilityService } from './mydbutility.service';
import { MobileBillComponent } from './mobile-bill/mobile-bill.component';
import { ElectricBillComponent } from './electric-bill/electric-bill.component';
import { BookCylinderComponent } from './book-cylinder/book-cylinder.component';
import { DthBillComponent } from './dth-bill/dth-bill.component';
import { ServicesComponent } from './services/services.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SignComponent,
    DashboardComponent,
    MobileBillComponent,
    ElectricBillComponent,
    BookCylinderComponent,
    DthBillComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  
  ],
  providers: [MydbutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
