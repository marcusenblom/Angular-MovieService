import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  @Output() userInfo: EventEmitter<Order> = new EventEmitter<Order>();

  infoFromInput;

  constructor(private service: OrderService) { }

  ngOnInit(): void {
  }

  sendUserInfo(){
    this.userInfo.emit(this.infoFromInput);
  }

}
