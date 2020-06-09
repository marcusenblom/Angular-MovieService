import { Category } from './category';

export class Movie {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryList: Category[];

  // constructor(id: number, title: string, description: string, price: number, imageUrl: string, category: string[]){
  //   this.id = id;
  //   this.title = title;
  //   this.description = description;
  //   this.price = price;
  //   this.imageUrl = imageUrl;
  //   this.category = category;
  // }
}
