import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IAdminService from './IAdminService';
import { Subject } from 'rxjs';
import { Movie } from '../models/movie';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements IAdminService {

  orderList: Subject<Order[]> = new Subject<Order[]>();

  readonly apiUrl = "https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=37";

  constructor(private http: HttpClient) { }

  getOrders(){

    this.http.get(this.apiUrl).subscribe(data => {

    });
  }
}
