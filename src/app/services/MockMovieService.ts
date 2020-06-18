import { Subject } from 'rxjs';
import { Movie } from '../models/movie';
import IMovieService from './IMovieService';
import { Category } from '../models/category';

export default class MockMovieService implements IMovieService{


  private testMovies: Movie[] = [
    {amount: 1, id: 0, title: "Title of testmovie", description: "Test description", price: 1, imageUrl: "test img url", year: 1992, categoryList: [{categoryId: 6, category: "Thriller"}] },
    {amount: 3, id: 1, title: "Title of testmovie 2", description: "Test description", price: 2, imageUrl: "test img url", year: 1992, categoryList: [{categoryId: 5, category: "Action"}]}
  ];
  private testCategories: Category[] = [
    {
      categoryId: 5,
      category: "Action"
    },
    {
      categoryId: 6,
      category: "Thriller"
    },
    {
      categoryId: 7,
      category: "Comedy"
    },
    {
      categoryId: 8,
      category: "Sci-fi"
    }
  ]

  movieList: Subject<Movie[]> = new Subject<Movie[]>();
  singleMovie: Subject<Movie> = new Subject<Movie>();
  categories: Subject<Category[]> = new Subject<Category[]>();

  getData(): void {
    this.movieList.next(this.testMovies);
  }

  getSingleMovie(): void {
    this.singleMovie.next(this.testMovies[0]);
  }

  getCategories(): void {
    this.categories.next(this.testCategories);
  }


}
