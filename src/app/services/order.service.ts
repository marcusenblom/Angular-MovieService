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

  readonly apiUrl = "https://medieinstitutet-wie-products.azurewebsites.net/api/orders";

  constructor(private http: HttpClient) { }

  orderRows: OrderRow[] = [];
  cartAmount: Subject<number> = new Subject<number>();

  updateCartAmount(){
    let currentCartItems = JSON.parse(localStorage.getItem("streamnetCart")) || [];
    let amount: number = 0;
    currentCartItems.forEach(element => {
      amount += element.amount;
    });
    this.cartAmount.next(amount)
  }

  sendOrder(cartItems: Movie[], userInfo: Customer, totalPrice: number, paymentMethod: string){

    cartItems.forEach(product => {
      // this.totalPrice = this.totalPrice + product.price;

      let newOrderRow = new OrderRow;
      newOrderRow.productId = product.id;
      newOrderRow.amount = product.amount;

      this.orderRows.push(newOrderRow);
    });

    let orderObject: Order = new Order(37, userInfo.firstName + " " + userInfo.lastName, paymentMethod, totalPrice, this.orderRows); // Create new object with cartItems, AdminUser (hard coded) and paymentMethod + loop cartItems to get totalPrice of the order

    // HTTP POST
    this.http.post(this.apiUrl, orderObject).subscribe(data => {
    });

    // Resets cart
    localStorage.setItem("streamnetCart", null);
  }
}
