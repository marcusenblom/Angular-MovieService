import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { DetailComponent } from './detail.component';
import MockMovieService from 'src/app/services/MockMovieService';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [DetailComponent, { provide: MovieService, useClass: MockMovieService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call function to add movie to cart', () => {

  //   const newMovie = new Movie;
  //   newMovie.id = 1;
  //   newMovie.title = "TestMovie";
  //   newMovie.description = "TestDescription";
  //   newMovie.price = 199;
  //   newMovie.imageUrl = "ImageUrl";
  //   newMovie.year = 1992;
  //   newMovie.categoryList = [{categoryId: 5, category: "Action"}];
  //   newMovie.amount = 1;

  //   component.addToBag(newMovie);

  //   expect(component.addToBag).toHaveBeenCalled();
  // });


});
