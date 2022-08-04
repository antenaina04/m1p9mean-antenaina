import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivererAdminMenuComponent } from './deliverer-admin-menu.component';

describe('DelivererAdminMenuComponent', () => {
  let component: DelivererAdminMenuComponent;
  let fixture: ComponentFixture<DelivererAdminMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelivererAdminMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelivererAdminMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
