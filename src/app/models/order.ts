import { Time } from '@angular/common';
import { Customer } from './customer';
import { OrderRow } from './orderRow';

export class Order {
  id: number;
  companyId: number;
  created: Time;
  createdBy: Customer;
  paymentMethod: string;
  totalPrice: number;
  status: number;
  orderRows: OrderRow[];
}
