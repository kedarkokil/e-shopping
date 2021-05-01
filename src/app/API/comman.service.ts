import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'http://lmsuat.calibehr.com';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  showCarosual = true;

  JsonData: any = [];

  public shareItem = new BehaviorSubject(null);
  constructor(private http: HttpClient) { 

    this.JsonData = {
      "data": [
        {
          "text": "Home",
          "icon": "fa fa-home",
          "expand": false,
          "show": false ,
          "children": [
            {
              "text": "Products",
              "badge": "3",
              "show": false
             
            }
          ]       
        }
      ]
    }
  }


  public get(url): Observable<any> {
    return this.http.get(API_URL + '/json/' + url).pipe(map(res => res));
  }

  shareData(item: any) {
    this.shareItem.next({ item });
  }
}