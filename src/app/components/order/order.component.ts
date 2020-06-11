import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private service: OrderService) { }

  currentCartItems: Movie[];

  ngOnInit(): void {

    this.getCart();

  }

  getCart(){

    if (localStorage.getItem("streamnetCart")) {
      this.currentCartItems = JSON.parse(localStorage.getItem("streamnetCart")) || [];
    }
  }

  removeMovie(movie: Movie){
    let indexOf: number = this.currentCartItems.indexOf(movie);
    if (indexOf != -1) { // -1 will be returned if something goes wrong with the index of movie
      this.currentCartItems.splice(indexOf, 1);
    } else {
      alert("Något gick fel, movien kunde inte tas bort");
    }

    localStorage.setItem("streamnetCart", JSON.stringify(this.currentCartItems));

  }

}
