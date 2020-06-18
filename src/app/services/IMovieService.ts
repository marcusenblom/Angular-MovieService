import { Subject } from 'rxjs';
import { Movie } from '../models/movie';

export default interface IMovieService {

  movieList: Subject<Movie[]>;

  getData(): void;

  getSingleMovie(id: string): void;

  getCategories(): void;

}
