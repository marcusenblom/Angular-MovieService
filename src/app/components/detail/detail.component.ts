import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: string;
  movie: Movie;

  constructor(private route: ActivatedRoute, private service: MovieService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.service.singleMovie.subscribe((movie: Movie) => {    // Single movie
      this.movie = movie;

    });

    this.route.params.subscribe(p => {  // Params
      this.id = p.id;
    });

    this.service.getSingleMovie(this.id);
    this.orderService.updateCartAmount();
  }


  addToBag(movie: Movie){
    let newLocalArray = [];

    if (localStorage.getItem("streamnetCart")) {
      let currentCartItems = JSON.parse(localStorage.getItem("streamnetCart")) || [];

      let alreadyExist: boolean = false;

      currentCartItems.forEach(movieFromCart => {
        if (movieFromCart.id == movie.id) {
          movieFromCart.amount ++;
          alreadyExist = true;
        }
        newLocalArray.push(movieFromCart);
      });

      if (!alreadyExist) {
        newLocalArray.push(movie);
      }

    } else {
      newLocalArray.push(movie);
    };

    localStorage.setItem("streamnetCart", JSON.stringify(newLocalArray));
    this.orderService.updateCartAmount();

    document.getElementById("addButton").classList.add("pushed");
    document.getElementById("addButton").innerHTML = "Movie added to bag!";
    setTimeout(function(){
      document.getElementById("addButton").classList.remove("pushed");
      document.getElementById("addButton").innerHTML = "Add to bag";
    }, 2000);
  }

}
