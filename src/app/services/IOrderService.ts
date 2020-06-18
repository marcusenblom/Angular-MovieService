import { Subject } from 'rxjs';
import { Movie } from '../models/movie';
import { Customer } from '../models/customer';
import { OrderRow } from '../models/orderRow';

export default interface IOrderService {

  orderRows: OrderRow[];
  cartAmount: Subject<number>;

  sendOrder(cartItems: Movie[], userInfo: Customer, totalPrice: number, paymentMethod: string): void;
  updateCartAmount();

}
