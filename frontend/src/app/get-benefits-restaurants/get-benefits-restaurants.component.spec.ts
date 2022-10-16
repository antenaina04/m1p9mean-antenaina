import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBenefitsRestaurantsComponent } from './get-benefits-restaurants.component';

describe('GetBenefitsRestaurantsComponent', () => {
  let component: GetBenefitsRestaurantsComponent;
  let fixture: ComponentFixture<GetBenefitsRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBenefitsRestaurantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBenefitsRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
