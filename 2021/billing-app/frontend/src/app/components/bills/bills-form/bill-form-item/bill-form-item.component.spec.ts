import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillFormItemComponent } from './bill-form-item.component';

describe('BillFormItemComponent', () => {
  let component: BillFormItemComponent;
  let fixture: ComponentFixture<BillFormItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillFormItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
