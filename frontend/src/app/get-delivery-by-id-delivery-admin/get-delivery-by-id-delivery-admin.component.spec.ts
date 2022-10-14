import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDeliveryByIdDeliveryAdminComponent } from './get-delivery-by-id-delivery-admin.component';

describe('GetDeliveryByIdDeliveryAdminComponent', () => {
  let component: GetDeliveryByIdDeliveryAdminComponent;
  let fixture: ComponentFixture<GetDeliveryByIdDeliveryAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDeliveryByIdDeliveryAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDeliveryByIdDeliveryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
