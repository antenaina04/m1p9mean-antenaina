import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDeliveryLoginComponent } from './service-delivery-login.component';

describe('ServiceDeliveryLoginComponent', () => {
  let component: ServiceDeliveryLoginComponent;
  let fixture: ComponentFixture<ServiceDeliveryLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDeliveryLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDeliveryLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
