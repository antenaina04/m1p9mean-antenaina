import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOrderByUserComponent } from './get-order-by-user.component';

describe('GetOrderByUserComponent', () => {
  let component: GetOrderByUserComponent;
  let fixture: ComponentFixture<GetOrderByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOrderByUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOrderByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
