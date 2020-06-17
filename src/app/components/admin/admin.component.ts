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

      console.log(this.orderList);
    });

    this.service.getOrders();

  }

  removeOrder(order: Order){
    this.service.removeOrder(order.id);

    let indexOf: number = this.orderList.indexOf(order);
    if (indexOf != -1) { // -1 will be returned if something goes wrong with the index of movie
      this.orderList.splice(indexOf, 1);
    } else {
      alert("Something went wrong when deleting the order");
    }
  }
}
