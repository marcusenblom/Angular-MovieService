import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { AdminComponent } from './admin.component';
import { Order } from 'src/app/models/order';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove order', () => {

    let order: Order = {
      id: 1,
      companyId: 37,
      createdBy: "Test",
      paymentMethod: "Test Visa",
      totalPrice: 199,
      orderRows: [
        {productId: 1,
        amount: 3}
      ]
    }

    component.orderList = [order];

    expect(component.orderList.length).toEqual(1);

    component.removeOrder(order);

    expect(component.orderList.length).toBeLessThan(1);
  });


});
