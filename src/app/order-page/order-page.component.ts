import { Component, OnInit } from '@angular/core';
import { CommonService } from '../API/comman.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  JsonData: any;
  subData: any
  constructor(public commmonService: CommonService) { }

  ngOnInit() {
    if (this.commmonService.shareItem) {
      this.commmonService.shareItem.subscribe((item: any) => {
        if (item) {
          this.subData = item.item;
        }
      });
    }

   
  }

  getSelectedData() {

  }
}
