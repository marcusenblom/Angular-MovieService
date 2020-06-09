import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private service: OrderService) { }

  ngOnInit(): void {

  }

  sendOrder(){
    this.service.sendOrder();
  }

}
