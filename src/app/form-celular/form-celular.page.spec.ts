import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormCelularPage } from './form-celular.page';

describe('FormCelularPage', () => {
  let component: FormCelularPage;
  let fixture: ComponentFixture<FormCelularPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCelularPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
