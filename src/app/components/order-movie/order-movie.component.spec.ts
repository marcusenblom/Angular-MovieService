import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { OrderMovieComponent } from './order-movie.component';
import MockMovieService from 'src/app/services/MockMovieService';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';

describe('OrderMovieComponent', () => {
  let component: OrderMovieComponent;
  let fixture: ComponentFixture<OrderMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMovieComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [OrderMovieComponent, { provide: MovieService, useClass: MockMovieService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit upon removal', () => {

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

    const spy = spyOn(component.remove, "emit");

    component.removeFromCart();

    expect(spy).toHaveBeenCalled();

    // Vad är felet här?
  });

});
