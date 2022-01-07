import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookCylinderComponent } from './book-cylinder/book-cylinder.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DthBillComponent } from './dth-bill/dth-bill.component';
import { ElectricBillComponent } from './electric-bill/electric-bill.component';
import { MobileBillComponent } from './mobile-bill/mobile-bill.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { SignComponent } from './sign/sign.component';

const routes: Routes = [
  {path:'home' , component:AppComponent},
  {path:'register' , component: RegisterComponent},
  {path:'sign' , component: SignComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'mobileBill', component:MobileBillComponent},
  {path:'electricBill', component:ElectricBillComponent},
  {path:'bookCylinder', component:BookCylinderComponent},
  {path:'dth',component:DthBillComponent},
  {path:'services', component:ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
