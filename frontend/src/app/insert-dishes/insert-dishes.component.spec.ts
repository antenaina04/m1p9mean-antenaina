import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDishesComponent } from './insert-dishes.component';

describe('InsertDishesComponent', () => {
  let component: InsertDishesComponent;
  let fixture: ComponentFixture<InsertDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertDishesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
