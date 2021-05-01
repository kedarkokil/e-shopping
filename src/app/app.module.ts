import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmexioChartsModule, AmexioDashBoardModule, AmexioEnterpriseModule, AmexioWidgetModule } from "amexio-ng-extensions"; 
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CommonService } from './API/comman.service';
import { HomePageComponent } from './home-page/home-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AmexioWidgetModule,
    FormsModule,
    HttpClientModule,
    AmexioChartsModule,
    AmexioDashBoardModule,
    AmexioEnterpriseModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [HttpClient,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
