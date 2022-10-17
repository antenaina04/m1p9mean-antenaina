import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBenefitsDateComponent } from './get-benefits-date.component';

describe('GetBenefitsDateComponent', () => {
  let component: GetBenefitsDateComponent;
  let fixture: ComponentFixture<GetBenefitsDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBenefitsDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBenefitsDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
