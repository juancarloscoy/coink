import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepperPage } from './stepper.page';

describe('StepperPage', () => {
  let component: StepperPage;
  let fixture: ComponentFixture<StepperPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
