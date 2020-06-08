import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMovieComponent } from './order-movie.component';

describe('OrderMovieComponent', () => {
  let component: OrderMovieComponent;
  let fixture: ComponentFixture<OrderMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMovieComponent ]
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
});
