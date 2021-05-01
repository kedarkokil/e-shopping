import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'app-home-page',
    pathMatch: 'full'
  },
  {
    path: 'app-home-page',
    component: HomePageComponent
  },
  {
    path: 'app-order-page',
    loadChildren: './order-page/order-page.module#OrderPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
