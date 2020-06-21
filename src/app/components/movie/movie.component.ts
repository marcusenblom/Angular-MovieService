import { Component, OnInit, Input } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;
  @Input() category: number;

  categoryExist: boolean = false;

  constructor() { }

  ngOnInit(): void {

    if (this.movie) {
      this.checkIfCategoryIsTrue();
    }

  }

  checkIfCategoryIsTrue(){
    this.movie.categoryList.forEach(element => {    // Checks if the movie matches the input "category" sent from HomeComponent. If not, nothing will be displayed in the HTML file

      if (element.categoryId == this.category || this.category == 0) {
        this.categoryExist = true;
      }
    });
  }
}
