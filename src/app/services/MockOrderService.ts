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

  orderRows: OrderRow[] = [];
  cartAmount: Subject<number> = new Subject<number>();

  updateCartAmount(){
    let currentCartItems: Movie[] = [
      {amount: 1, id: 0, title: "Title of testmovie", description: "Test description", price: 1, imageUrl: "test img url", year: 1992, categoryList: [{categoryId: 6, category: "Thriller"}] },
      {amount: 3, id: 1, title: "Title of testmovie 2", description: "Test description", price: 2, imageUrl: "test img url", year: 1992, categoryList: [{categoryId: 5, category: "Action"}]}
    ];
    let amount: number = 0;
    currentCartItems.forEach(element => {
      amount += element.amount;
    });
    this.cartAmount.next(amount)
  }

  sendOrder(cartItems: Movie[], userInfo: Customer, totalPrice: number, paymentMethod: string){

  }
}
