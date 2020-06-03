import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[];

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.service.movieList.subscribe((movies: Movie[]) => {
      this.movies = movies;
    });

    this.service.getData();

  }

}
