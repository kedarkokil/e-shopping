import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutePageModule } from './order-page.routes';
import {OrderPageComponent} from './order-page.component';

import { AmexioWidgetModule } from 'amexio-ng-extensions';

 // ****** Created By Kedar Kokil 01-05-2021 *******


@NgModule({
  imports: [
    CommonModule,
    OrdersRoutePageModule,
    AmexioWidgetModule
  ],
  declarations: [OrderPageComponent]
})
export class OrderPageModule { }

