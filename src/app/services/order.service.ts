import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import IOrderService from './IOrderService';
import { Customer } from '../models/customer';
import { Order } from '../models/order';
import { OrderRow } from '../models/orderRow';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements IOrderService {

  readonly apiPostUrl = "https://medieinstitutet-wie-products.azurewebsites.net/api/orders";

  constructor(private http: HttpClient) { }

  totalPrice: number = 0;
  orderRows: OrderRow[] = [];
  returnData: any;

  sendOrder(cartItems: Movie[], userInfo: Customer, paymentMethod: string){

    cartItems.forEach(product => {
      this.totalPrice = this.totalPrice + product.price;

      let newOrderRow = new OrderRow;
      newOrderRow.productId = product.id;
      newOrderRow.amount = 1; // THIS IS NOW HARD CODED. Change when functionality exists on checkout page

      this.orderRows.push(newOrderRow);
    });
    console.log(this.totalPrice);

    let orderObject: Order = new Order(37, "Mackan", paymentMethod, this.totalPrice, this.orderRows); // Create new object with cartItems, AdminUser (hard coded) and paymentMethod + loop cartItems to get totalPrice of the order

    this.http.post(this.apiPostUrl, orderObject).subscribe(data => {
      this.returnData = data;
    });

    console.log("return data: " + this.returnData);


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

    // Set localStorage OrderList so that AdminComponent can find that info
    localStorage.setItem("streamnetOrderList", JSON.stringify(newOrderArray));

    // Resets cart
    localStorage.setItem("streamnetCart", "");

  }
}
