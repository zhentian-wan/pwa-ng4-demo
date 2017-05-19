import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

function toFirebaseList(arr: any[]): any[] {
  return arr
    .map((item, index) => {
      if (item) {
        item.index = index;
      }
      return item;
    })
    .filter(item => item !== null);
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id
})
export class HomeComponent implements OnInit {
  sale: Observable<any>;
  products: Observable<any>;
  constructor(private http: Http) { }

  ngOnInit() {

    this.sale = this.http.get('https://ngstore-feb94.firebaseio.com/sale.json')
      .map(res => res.json());
    this.products = this.http.get('https://ngstore-feb94.firebaseio.com/product.json')
      .map(res => res.json())
      .map(list => toFirebaseList(list));
  }

}
