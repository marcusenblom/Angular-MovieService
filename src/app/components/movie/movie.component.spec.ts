import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MovieComponent } from './movie.component';
import { MovieService } from 'src/app/services/movie.service';
import MockMovieService from 'src/app/services/MockMovieService';
import { Movie } from 'src/app/models/movie';
import { Component } from '@angular/core';

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
    expect(component).toBeTruthy();
  });

  it('should set categoryExist to true if category matches', () => {

    let movie: Movie = {id: 1,
      title: "Title",
      description: "Description",
      price: 199,
      imageUrl: "ImgUrl",
      year: 1992,
      categoryList: [{categoryId: 5, category: "Action"}],
      amount: 1}

    component.movie = movie;
    component.category = 5;

    component.checkIfCategoryIsTrue();

    expect(component.categoryExist).toBeTrue();
  });
});
