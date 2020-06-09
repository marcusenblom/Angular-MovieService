import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import IMovieService from './IMovieService';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class MovieService implements IMovieService{

  movieList: Subject<Movie[]> = new Subject<Movie[]>();
  singleMovie: Subject<Movie> = new Subject<Movie>();
  categories: Subject<Category[]> = new Subject<Category[]>();

  constructor(private http: HttpClient) { }

  getData(){

    this.getCategories();
    this.categories.subscribe((categories: Category[]) => {

      this.http.get("https://medieinstitutet-wie-products.azurewebsites.net/api/products").subscribe((data: any) => {

        const moviesFromApi: Movie[] = data.map((movie: any) => {

          const newMovie = new Movie();
          newMovie.id = movie.id;
          newMovie.title = movie.name;
          newMovie.description = movie.description;
          newMovie.price = movie.price;
          newMovie.imageUrl = movie.imageUrl;
          newMovie.categoryList = [];

          movie.productCategory.forEach(element => {
            categories.forEach(e => {
              if (element.categoryId == e.categoryId) {
                let newCategory = new Category;

                newCategory.categoryId = element.categoryId;
                newCategory.category = e.category;

                newMovie.categoryList.push(newCategory);
              }
            });
          });

          return newMovie;
        });

        this.movieList.next(moviesFromApi);
      });
    });



  }

  getSingleMovie(id: string){

    this.getCategories();
    this.categories.subscribe((categories: Category[]) => {
      this.http.get(`https://medieinstitutet-wie-products.azurewebsites.net/api/products/${id}`).subscribe((data: any) => {

        const newMovie = new Movie();
        newMovie.id = data.id;
        newMovie.title = data.name;
        newMovie.description = data.description;
        newMovie.price = data.price;
        newMovie.imageUrl = data.imageUrl;
        newMovie.categoryList = [];

        data.productCategory.forEach(element => {
          categories.forEach(e => {
            if (element.categoryId == e.categoryId) {
              let newCategory = new Category;

              newCategory.categoryId = element.categoryId;
              newCategory.category = e.category;

              newMovie.categoryList.push(newCategory);
            }
          });
        });

        this.singleMovie.next(newMovie);
      });
    });
  };

  getCategories(){
    this.http.get(`https://medieinstitutet-wie-products.azurewebsites.net/api/categories`).subscribe((data: any) => {

      const categoriesFromApi: Category[] = data.map((category: any) => {   // Changes the incoming data to match the Category class

        const newCategory = new Category();
        newCategory.categoryId = category.id;
        newCategory.category = category.name;

        return newCategory;
      });

      this.categories.next(categoriesFromApi);

    });
  };


}
