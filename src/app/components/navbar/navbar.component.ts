import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private service: OrderService) { }

  cartAmount: number = 0;

  ngOnInit(): void {
    this.service.cartAmount.subscribe((amount: number) => {
      this.cartAmount = amount;
    });
  }


}
