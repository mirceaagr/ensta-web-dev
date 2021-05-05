import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillEditComponent } from './bill-edit.component';

describe('BillEditComponent', () => {
  let component: BillEditComponent;
  let fixture: ComponentFixture<BillEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
