import { Injectable } from '@angular/core';
import IAdminService from './IAdminService';
import { Subject } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class MockAdminService implements IAdminService {

  orderList: Subject<Order[]> = new Subject<Order[]>();

  private testData = [
    { id: 1,
      companyId: 36,
      createdBy: "Test customer",
      paymentMethod: "Test Visa",
      totalPrice: 199,
      orderRows: [
        {productId: 1, amount: 3},
        {productId: 2, amount: 1}
      ]},
    { id: 2,
      companyId: 36,
      createdBy: "Test customer",
      paymentMethod: "Test Mastercard",
      totalPrice: 299,
      orderRows: [
        {productId: 1, amount: 3},
        {productId: 2, amount: 1}
      ]}
    ];

  getOrders(){

    this.orderList.next(this.testData);

  }

  removeOrder(id: number){}

}
