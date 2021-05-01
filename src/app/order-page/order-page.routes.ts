import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderPageComponent } from './order-page.component';

 // ****** Created By Kedar Kokil 01-05-2021 *******

const routes: Routes = [
  {
    path: '',
    component: OrderPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutePageModule { }

