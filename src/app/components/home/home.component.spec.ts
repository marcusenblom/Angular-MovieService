import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HomeComponent } from './home.component';
import MockMovieService from 'src/app/services/MockMovieService';
import { MovieService } from 'src/app/services/movie.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [HomeComponent, { provide: MovieService, useClass: MockMovieService }] // replace MovieService with MockMovieService when tests are run
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get movies', () => {
    expect(component.movies.length).toBeGreaterThan(0);
  });

});
