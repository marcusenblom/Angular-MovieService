import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { OrderMovieComponent } from './order-movie.component';

describe('OrderMovieComponent', () => {
  let component: OrderMovieComponent;
  let fixture: ComponentFixture<OrderMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMovieComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ]
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
    const spy = spyOn(component.remove, "emit");

    component.removeFromCart();

    expect(spy).toHaveBeenCalled();
  });

  it('should emit upon removal', () => {
    const spy = spyOn(component.increase, "emit");

    component.increaseAmount();

    expect(spy).toHaveBeenCalled();
  });

  it('should emit upon removal', () => {
    const spy = spyOn(component.decrease, "emit");

    component.decreaseAmount();

    expect(spy).toHaveBeenCalled();
  });

});
