import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRestaurantComponent } from './insert-restaurant.component';

describe('InsertRestaurantComponent', () => {
  let component: InsertRestaurantComponent;
  let fixture: ComponentFixture<InsertRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
