import { Category } from './category';

export class Movie {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  year: number;
  categoryList: Category[];
  amount: number;

  // constructor(id: number, title: string, description: string, price: number, imageUrl: string, category: Category[], amount: number){
  //   this.id = id;
  //   this.title = title;
  //   this.description = description;
  //   this.price = price;
  //   this.imageUrl = imageUrl;
  //   this.categoryList = category;
  //   this.amount = amount;
  // }
}
