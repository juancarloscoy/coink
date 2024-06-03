import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountDataPage } from './account-data.page';

describe('AccountDataPage', () => {
  let component: AccountDataPage;
  let fixture: ComponentFixture<AccountDataPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
