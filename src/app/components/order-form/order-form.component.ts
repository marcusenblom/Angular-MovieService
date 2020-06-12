import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderForm } from 'src/app/models/orderForm';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  @Input() cart: Movie[];
  @Output() userInfo: EventEmitter<OrderForm> = new EventEmitter<OrderForm>();

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

    let paymentMethod = "MasterVisa";   // Must be fetched from dropdown

    // Skapa upp nytt Customer-objekt

    let newCustomer: Customer = this.customer.value;

    let newOrderForm = new OrderForm;

    newOrderForm.customer = newCustomer;
    newOrderForm.paymentMethod = paymentMethod;

    // Emitta Userinfo + Payment method till parent component

    this.userInfo.emit(newOrderForm);
  }

}
