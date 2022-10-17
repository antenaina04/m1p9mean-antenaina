import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDetailedBenefitsComponent } from './get-detailed-benefits.component';

describe('GetDetailedBenefitsComponent', () => {
  let component: GetDetailedBenefitsComponent;
  let fixture: ComponentFixture<GetDetailedBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDetailedBenefitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDetailedBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
