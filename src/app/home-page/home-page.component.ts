import { Component, OnInit } from '@angular/core';
import { CommonService } from '../API/comman.service';
import { Router } from '@angular/router';

 // ****** Created By Kedar Kokil 01-05-2021 *******

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  ProductsList: any;
  showList = false;
  showGrid = true;
  titleChange = 'Selected: All';

  constructor(public commonService: CommonService, public router: Router) { }

  ngOnInit() {

    this.commonService.get('products/').subscribe(res => {
      this.ProductsList = (res.data).splice(0, 12);
    });
  }

  onListClick() {
    this.commonService.showCarosual = false;
    this.showGrid = false;
    this.titleChange = 'Featured';
    this.showList = true;
  }

  onGridClick() {
    this.commonService.showCarosual = false;
    this.showList = false;
    this.titleChange = 'Selected: All';
    this.showGrid = true;
  }

  onItemClick(item: any) {
    this.router.navigate(['/app-order-page']);
    this.commonService.shareData(item);
  }
}
