import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _api:ApiService) { }

  products: any[] = [];

  ngOnInit(): void {

    this.products = [
      {
        code: 'f230fh0g3',
        name: 'Bamboo Watch'
      },
      {
        code: 'nvklal433',
        name: 'Black Watch'
      },
      {
        code: 'zz21cz3c1',
        name: 'Blue Band'
      },
      {
        code: '244wgerg2',
        name: 'Blue T-Shirt'
      },
    ]


    this.getTestData();
  }

  getTestData() {
    this._api.getRequest('').subscribe(res => {
      console.log(res);
    })
  }

}
