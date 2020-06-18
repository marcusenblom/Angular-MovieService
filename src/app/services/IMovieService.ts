import { Subject } from 'rxjs';
import { Movie } from '../models/movie';
import { Category } from '../models/category';

export default interface IMovieService {

  movieList: Subject<Movie[]>;
  singleMovie: Subject<Movie>;
  categories: Subject<Category[]>;

  getData(): void;

  getSingleMovie(id: string): void;

  getCategories(): void;

}
