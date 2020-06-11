import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/order';
import { Customer } from 'src/app/models/customer';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  @Output() userInfo: EventEmitter<Customer> = new EventEmitter<Customer>();
  @Output() paymentMethod: EventEmitter<string> = new EventEmitter<string>();

  customer = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      zip: ['', Validators.required],
      city: ['', Validators.required]
    })

  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  sendUserInfo(){

    let paymentMethod = "MasterVisa";

    // Skapa upp nytt Customer-objekt

    let newCustomer: Customer = this.customer.value;

    // Emitta Userinfo + Payment method till parent component

    this.userInfo.emit(newCustomer);
    this.paymentMethod.emit(paymentMethod);


  }

}
