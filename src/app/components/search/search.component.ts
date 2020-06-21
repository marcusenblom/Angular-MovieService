import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  movies: any[];
  firstVisit: boolean = true;

  constructor(private service: MovieService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.updateCartAmount();
  }

  getSearch(search: string){

    if (search.length > 0) {
      this.service.searchData.subscribe((movies: Movie[]) => {   // Subscribing on fetched movies
        this.movies = movies;
      });

      this.service.getSearchData(search);

    } else {
      this.movies = [];
    }

    this.firstVisit = false;
  }

}
