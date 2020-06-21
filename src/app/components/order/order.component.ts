import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Movie } from 'src/app/models/movie';
import { Customer } from 'src/app/models/customer';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit {

  constructor(private service: OrderService) { }

  currentCartItems: Movie[];
  paymentMethod: string;
  userInfo: Customer;
  totalPrice: number = 0;

  ngOnInit(): void {

    this.getCart();
  }

  getCart(){

    this.currentCartItems = JSON.parse(localStorage.getItem("streamnetCart")) || [];

    this.totalPrice = 0;
    this.currentCartItems.forEach(product => {
      this.totalPrice += product.price * product.amount;
    });
    this.service.updateCartAmount();
  }

  removeMovie(movie: Movie){
    let indexOf: number = this.currentCartItems.indexOf(movie);
    if (indexOf != -1) { // -1 will be returned if something goes wrong with the index of movie
      this.currentCartItems.splice(indexOf, 1);
    } else {
      alert("Something went wrong, the movie could not be removed. Please contanct the support");
    }

    localStorage.setItem("streamnetCart", JSON.stringify(this.currentCartItems));
    this.getCart();
    this.service.updateCartAmount();

  }

  increaseAmount(movie: Movie){
    let indexOf: number = this.currentCartItems.indexOf(movie);
    this.currentCartItems[indexOf].amount ++;
    localStorage.setItem("streamnetCart", JSON.stringify(this.currentCartItems));
    this.getCart();
    this.service.updateCartAmount();
  }
  decreaseAmount(movie: Movie){
    let indexOf: number = this.currentCartItems.indexOf(movie);
    let itemInCart = this.currentCartItems[indexOf];
    if (itemInCart.amount < 2) {
      this.currentCartItems.splice(indexOf, 1);
    } else {
      itemInCart.amount --;
    }

    localStorage.setItem("streamnetCart", JSON.stringify(this.currentCartItems));
    this.getCart();
    this.service.updateCartAmount();
  }

  sendOrderViaService(orderForm){

    this.paymentMethod = orderForm.paymentMethod;
    this.userInfo = orderForm.customer;

    this.service.sendOrder(this.currentCartItems, this.userInfo, this.totalPrice, this.paymentMethod);

    this.currentCartItems = [];
    this.service.updateCartAmount();
  }
}




