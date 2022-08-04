import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllDeliveriesComponent } from './get-all-deliveries.component';

describe('GetAllDeliveriesComponent', () => {
  let component: GetAllDeliveriesComponent;
  let fixture: ComponentFixture<GetAllDeliveriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllDeliveriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllDeliveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
