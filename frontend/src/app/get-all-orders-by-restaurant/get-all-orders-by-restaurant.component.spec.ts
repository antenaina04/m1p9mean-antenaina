import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllOrdersByRestaurantComponent } from './get-all-orders-by-restaurant.component';

describe('GetAllOrdersByRestaurantComponent', () => {
  let component: GetAllOrdersByRestaurantComponent;
  let fixture: ComponentFixture<GetAllOrdersByRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllOrdersByRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllOrdersByRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
