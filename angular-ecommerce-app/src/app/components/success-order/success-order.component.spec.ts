import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessOrderComponent } from './success-order.component';

describe('SuccessOrderComponent', () => {
  let component: SuccessOrderComponent;
  let fixture: ComponentFixture<SuccessOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessOrderComponent]
    });
    fixture = TestBed.createComponent(SuccessOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
