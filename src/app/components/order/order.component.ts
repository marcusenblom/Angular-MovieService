import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Movie } from 'src/app/models/movie';
import { Customer } from 'src/app/models/customer';

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

    this.currentCartItems.forEach(product => {
      this.totalPrice += product.price * product.amount;
    });
  }

  removeMovie(movie){
    let indexOf: number = this.currentCartItems.indexOf(movie);
    if (indexOf != -1) { // -1 will be returned if something goes wrong with the index of movie
      this.currentCartItems.splice(indexOf, 1);
    } else {
      alert("Något gick fel, filmen kunde inte tas bort. Var god kontaka supporten");
    }

    localStorage.setItem("streamnetCart", JSON.stringify(this.currentCartItems));
  }

  sendOrderViaService(orderForm){

    this.paymentMethod = orderForm.paymentMethod;
    this.userInfo = orderForm.customer;

    this.service.sendOrder(this.currentCartItems, this.userInfo, this.totalPrice, this.paymentMethod);

    this.currentCartItems = [];
  }


}




