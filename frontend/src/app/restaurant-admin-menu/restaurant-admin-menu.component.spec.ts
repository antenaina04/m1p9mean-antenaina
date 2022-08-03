import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAdminMenuComponent } from './restaurant-admin-menu.component';

describe('RestaurantAdminMenuComponent', () => {
  let component: RestaurantAdminMenuComponent;
  let fixture: ComponentFixture<RestaurantAdminMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantAdminMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantAdminMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
