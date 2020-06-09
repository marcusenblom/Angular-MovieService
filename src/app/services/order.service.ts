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

  constructor(private http: HttpClient) { }

  returnData;

  sendOrder(){
    this.http.post("https://medieinstitutet-wie-products.azurewebsites.net/api/orders", {"id": 1001, "companyId": 3737, "createdBy":"TestM","paymentMethod":"Visa","totalPrice":999,"status":0,"orderRows":[] }).subscribe(data => {
      this.returnData = data;
    });

    console.log(this.returnData);

  }

}
