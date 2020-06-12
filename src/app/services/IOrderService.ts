import { Subject } from 'rxjs';
import { Movie } from '../models/movie';
import { Customer } from '../models/customer';
import { OrderRow } from '../models/orderRow';

export default interface IOrderService {


  sendOrder(cartItems: Movie[], userInfo: Customer, paymentMethod: string): void;

}
