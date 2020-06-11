import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import IOrderService from './IOrderService';
import { Category } from '../models/category';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements IOrderService {

  readonly apiPostUrl = "https://medieinstitutet-wie-products.azurewebsites.net/api/orders";

  constructor(private http: HttpClient) { }

  returnData;

  sendOrder(cartItems: Movie[], userInfo: Customer, paymentMethod: string){

    let orderObject = {}; // Create new object with cartItems, userInfo and paymentMethod

    this.http.post(this.apiPostUrl, orderObject).subscribe(data => {
      this.returnData = data;
    });

    console.log(this.returnData);

    // Send to localstorage to be viewed in Admin

    localStorage.setItem("streamnetCart", JSON.stringify(orderObject));

  }
}
