import { Subject } from 'rxjs';

export default interface IOrderService {


  sendOrder(orderObject): void;

}
