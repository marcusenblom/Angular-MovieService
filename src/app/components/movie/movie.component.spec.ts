import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MovieComponent } from './movie.component';
import { MovieService } from 'src/app/services/movie.service';
import MockMovieService from 'src/app/services/MockMovieService';
import { Movie } from 'src/app/models/movie';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [MovieComponent, { provide: MovieService, useClass: MockMovieService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    const newMovie = new Movie;
    newMovie.id = 1;
    newMovie.title = "TestMovie";
    newMovie.description = "TestDescription";
    newMovie.price = 199;
    newMovie.imageUrl = "ImageUrl";
    newMovie.year = 1992;
    newMovie.categoryList = [{categoryId: 5, category: "Action"}];
    newMovie.amount = 1;

    component.movie = newMovie;
    component.category = 5;
    component.categoryExist = true;

    expect(component).toBeTruthy();
  });


});
