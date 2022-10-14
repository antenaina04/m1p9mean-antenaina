import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOrderByIdOrderAdminComponent } from './get-order-by-id-order-admin.component';

describe('GetOrderByIdOrderAdminComponent', () => {
  let component: GetOrderByIdOrderAdminComponent;
  let fixture: ComponentFixture<GetOrderByIdOrderAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOrderByIdOrderAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOrderByIdOrderAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
