import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.scss']
})
export class AdminOrderComponent implements OnInit {

  @Input() order: Order;
  @Output() remove: EventEmitter<Order> = new EventEmitter<Order>();

  constructor() { }

  ngOnInit(): void {
  }

  removeOrder(){
    this.remove.emit(this.order)
  }

}
