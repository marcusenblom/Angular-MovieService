import { Movie } from './movie';

export class OrderRow {
  id: number;
  productId: number;
  product: Movie;
  amount: number;
  orderId: number;
}
