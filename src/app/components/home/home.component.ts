import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movie[];
  categories: [];

  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.service.categories.subscribe((categories: []) => {
      this.categories = categories;

      console.log("categories: " + JSON.stringify(this.categories));

    });

    this.service.movieList.subscribe((movies: Movie[]) => {
      this.movies = movies;

      movies.forEach(movie => {

        movie.categoryList.forEach(category => {

          this.categories.forEach(element => {
            if (element.id === category.categoryId) {
              category.category = element.name;
            }
          });

        });
      });

      console.log(this.movies);

    });

    this.service.getData();

  }

}
