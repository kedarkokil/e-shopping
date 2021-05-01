import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './API/comman.service';

 // ****** Created By Kedar Kokil 01-05-2021 *******

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-shopping';

  users: any;
  topMenuData: any = [];

  constructor( public commonService: CommonService,  public router:Router) {
    this.topMenuData = [
     
      {
        "text": "Men"
      },
      {
        "text": "Women"
      },
      {
        "text": "Kids"
      }
    ]
   }

  ngOnInit() {
    this.router.navigate(['']);
  }

  onHomeClick() {
    this.router.navigate(['/app-home-page']);
  }

  onLogoClick() {
    this.commonService.showCarosual = !this.commonService.showCarosual;
  }

}
