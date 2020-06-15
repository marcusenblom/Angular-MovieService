import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private service: AdminService) { }

  orderList = [];

  ngOnInit(): void {

    this.service.orderList.subscribe((order: Order[]) => {   // Subscribing on fetched movies
      this.orderList = order;

    });

  }



}
