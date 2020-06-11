import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import IOrderService from './IOrderService';
import { Customer } from '../models/customer';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements IOrderService {

  readonly apiPostUrl = "https://medieinstitutet-wie-products.azurewebsites.net/api/orders";

  constructor(private http: HttpClient) { }

  returnData: any;

  sendOrder(cartItems: Movie[], userInfo: Customer, paymentMethod: string){

    let orderObject: Order; // Create new object with cartItems, userInfo and paymentMethod + loop cartItems to get totalPrice of the order

    this.http.post(this.apiPostUrl, orderObject).subscribe(data => {
      this.returnData = data;
    });

    console.log(this.returnData);


    // Send to localstorage to be viewed in Admin
    let newOrderArray = []

    if (localStorage.getItem("streamnetOrderList")) {
      let currentOrderList = JSON.parse(localStorage.getItem("streamnetOrderList")) || [];

      currentOrderList.forEach(order => {
        newOrderArray.push(order);
      });

      newOrderArray.push(orderObject);

    } else {
      newOrderArray.push(orderObject);
    };

    localStorage.setItem("streamnetOrderList", JSON.stringify(newOrderArray));

  }
}
