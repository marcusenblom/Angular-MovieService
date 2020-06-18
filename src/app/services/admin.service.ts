import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IAdminService from './IAdminService';
import { Subject } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements IAdminService {

  orderList: Subject<Order[]> = new Subject<Order[]>();

  constructor(private http: HttpClient) { }

  getOrders(){

    const apiUrl = `https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=37`;

    this.http.get(apiUrl).subscribe((data: any) => {

        this.orderList.next(data);
    });
  }

  removeOrder(id: number){
    const apiUrl = `https://medieinstitutet-wie-products.azurewebsites.net/api/orders/${id}`;

    this.http.delete(apiUrl).subscribe((data: any) => {
    });
  }
}
