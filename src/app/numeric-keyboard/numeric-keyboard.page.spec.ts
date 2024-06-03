import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumericKeyboardPage } from './numeric-keyboard.page';

describe('NumericKeyboardPage', () => {
  let component: NumericKeyboardPage;
  let fixture: ComponentFixture<NumericKeyboardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericKeyboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
