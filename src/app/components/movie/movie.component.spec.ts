import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.movie.id = 0;
    component.movie.title = "test";
    component.movie.description = "test";
    component.movie.price = 1;
    component.movie.imageUrl = "test";
    component.movie.category = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
