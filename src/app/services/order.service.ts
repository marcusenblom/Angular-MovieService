import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import IOrderService from './IOrderService';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements IOrderService {

  readonly apiPostUrl = "https://medieinstitutet-wie-products.azurewebsites.net/api/orders";

  constructor(private http: HttpClient) { }

  returnData;

  sendOrder(orderObject){
    this.http.post(this.apiPostUrl, orderObject).subscribe(data => {
      this.returnData = data;
    });

    console.log(this.returnData);

  }

}
