import { Subject } from 'rxjs';
import { Movie } from '../models/movie';
import { Customer } from '../models/customer';

export default interface IOrderService {


  sendOrder(cartItems: Movie[], userInfo: Customer, paymentMethod: string): void;

}
