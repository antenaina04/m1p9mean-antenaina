import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDelivererComponent } from './insert-deliverer.component';

describe('InsertDelivererComponent', () => {
  let component: InsertDelivererComponent;
  let fixture: ComponentFixture<InsertDelivererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertDelivererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertDelivererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
