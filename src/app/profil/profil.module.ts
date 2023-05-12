import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { OrdersComponent } from './orders/orders.component';
import { PasswordComponent } from './password/password.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';


@NgModule({
  declarations: [
    MyaccountComponent,
    OrdersComponent,
    PasswordComponent,
    LeftmenuComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule
  ]
})
export class ProfilModule { }
