import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { OrderComponent } from './order.component';
import { Movie } from 'src/app/models/movie';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove from cart', () => {
    let movie: Movie = {id: 1,
      title: "Title",
      description: "Description",
      price: 199,
      imageUrl: "ImgUrl",
      year: 1992,
      categoryList: [{categoryId: 5, category: "Action"}],
      amount: 1}

    component.currentCartItems = [movie]

    component.removeMovie(component.currentCartItems[0])

    expect(component.currentCartItems.length).toEqual(0);
  });

});
