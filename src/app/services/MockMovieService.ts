import IDataService from './IMovieService';
import { Subject } from 'rxjs';
import { Movie } from '../models/movie';
import IMovieService from './IMovieService';

export default class MockMovieService implements IMovieService{

  movies: Movie[] = [
    {amount: 1, id: 0, title: "Title of testmovie", description: "Test description", price: 1, imageUrl: "test img url", categoryList: [] },
    {amount: 3, id: 1, title: "Title of testmovie 2", description: "Test description", price: 2, imageUrl: "test img url", categoryList: []}
  ];

  movieList = new Subject<Movie[]>();

  getData(): void {
    this.movieList.next(this.movies);
  }

}
