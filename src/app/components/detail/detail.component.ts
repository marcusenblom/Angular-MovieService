import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: string;
  movie: Movie;
  // categories = [];

  constructor(private route: ActivatedRoute, private service: MovieService) { }

  ngOnInit(): void {
    this.service.singleMovie.subscribe((movie: Movie) => {    // Single movie
      this.movie = movie;

    });

    this.route.params.subscribe(p => {  // Params
      this.id = p.id;
    });

    this.service.getSingleMovie(this.id);
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

  }

}
