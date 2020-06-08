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
  singleMovie: Subject<Movie> = new Subject<Movie>();
  categories: Subject<[]> = new Subject<[]>();

  constructor(private http: HttpClient) { }

  getData(){

    this.getCategories();

    this.http.get("https://medieinstitutet-wie-products.azurewebsites.net/api/products").subscribe((data: any) => {

      const moviesFromApi: Movie[] = data.map((movie: any) => {

        const newMovie = new Movie();
        newMovie.id = movie.id;
        newMovie.title = movie.name;
        newMovie.description = movie.description;
        newMovie.price = movie.price;
        newMovie.imageUrl = movie.imageUrl;
        newMovie.categoryList = movie.productCategory;

        return newMovie;
      });
      this.movieList.next(moviesFromApi);

    });
  }

  getSingleMovie(id: string){

    this.getCategories();

    this.http.get(`https://medieinstitutet-wie-products.azurewebsites.net/api/products/${id}`).subscribe((data: any) => {

      const newMovie = new Movie();
      newMovie.id = data.id;
      newMovie.title = data.name;
      newMovie.description = data.description;
      newMovie.price = data.price;
      newMovie.imageUrl = data.imageUrl;
      newMovie.categoryList = data.productCategory;

      this.singleMovie.next(newMovie);
    });
  };

  getCategories(){
    this.http.get(`https://medieinstitutet-wie-products.azurewebsites.net/api/categories`).subscribe((data: []) => {

      this.categories.next(data);

    });
  };


}
