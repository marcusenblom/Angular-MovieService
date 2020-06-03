import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import IMovieService from './IMovieService';

@Injectable({
  providedIn: 'root'
})
export class MovieService implements IMovieService{

  movieList: Subject<Movie[]> = new Subject<Movie[]>();

  constructor(private http: HttpClient) { }

  getData(){
    this.http.get("https://medieinstitutet-wie-products.azurewebsites.net/api/products").subscribe((data: any) => {

      const moviesFromApi: Movie[] = data.map((movie: any) => {

        const newMovie = new Movie();
        newMovie.id = movie.id;
        newMovie.title = movie.name;
        newMovie.description = movie.description;
        newMovie.price = movie.price;
        newMovie.imageUrl = movie.imageUrl;
        // newMovie.category = movie.Year;
        return newMovie;
      });
      this.movieList.next(moviesFromApi);

    });
  }

}
