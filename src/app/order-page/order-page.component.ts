import { Component, OnInit } from '@angular/core';
import { CommonService } from '../API/comman.service';

 // ****** Created By Kedar Kokil 01-05-2021 *******


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
}
