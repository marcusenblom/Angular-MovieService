import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movie[];

  constructor(private service: MovieService) { }

  ngOnInit(): void {

    this.service.movieList.subscribe((movies: Movie[]) => {   // Subscribing on fetched movies
      this.movies = movies;

      console.log(this.movies);
    });

    this.service.getData();

  }

}
