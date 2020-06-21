import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { AdminComponent } from './admin.component';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
import { AdminService } from 'src/app/services/admin.service';
import { MockAdminService } from 'src/app/services/MockAdminService';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [ AdminComponent, { provide: AdminService, useClass: MockAdminService } ]
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

  it('should get orders', () => {
    expect(component.orderList.length).toBeGreaterThan(0);
  });

});
