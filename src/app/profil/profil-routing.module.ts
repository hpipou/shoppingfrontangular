import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { OrdersComponent } from './orders/orders.component';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  {path:'', component:MyaccountComponent},
  {path:'orders', component:OrdersComponent},
  {path:'password', component:PasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }
