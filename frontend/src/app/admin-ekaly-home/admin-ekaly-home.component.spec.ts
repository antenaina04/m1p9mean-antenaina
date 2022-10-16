import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEkalyHomeComponent } from './admin-ekaly-home.component';

describe('AdminEkalyHomeComponent', () => {
  let component: AdminEkalyHomeComponent;
  let fixture: ComponentFixture<AdminEkalyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEkalyHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEkalyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
