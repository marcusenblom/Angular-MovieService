import { Subject } from 'rxjs';
import { Movie } from '../models/movie';
import { Customer } from '../models/customer';
import { OrderRow } from '../models/orderRow';
import { Order } from '../models/order';

export default interface IAdminService {

  orderList: Subject<Order[]>;

  getOrders();

  removeOrder(id: number);

}
