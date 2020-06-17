import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-order-movie',
  templateUrl: './order-movie.component.html',
  styleUrls: ['./order-movie.component.scss']
})
export class OrderMovieComponent implements OnInit {

  @Input() movie: Movie;
  @Output() remove: EventEmitter<Movie> = new EventEmitter<Movie>();
  @Output() increase: EventEmitter<Movie> = new EventEmitter<Movie>();
  @Output() decrease: EventEmitter<Movie> = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit(): void {
  }

  removeFromCart(){
    this.remove.emit(this.movie);
  }

  increaseAmount(){
    this.increase.emit(this.movie);
  }
  decreaseAmount(){
    this.decrease.emit(this.movie);
  }

}
