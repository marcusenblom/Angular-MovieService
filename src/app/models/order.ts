import { OrderRow } from './orderRow';

export class Order {
  id: any;
  companyId: number;
  createdBy: string;
  paymentMethod: string;
  totalPrice: number;
  orderRows: OrderRow[];

  constructor(companyId: number, createdBy: string, paymentMethod: string, totalPrice: number, orderRows: OrderRow[]){
    this.companyId = companyId;
    this.createdBy = createdBy;
    this.paymentMethod = paymentMethod;
    this.totalPrice = totalPrice;
    this.orderRows = orderRows;
  }
}
