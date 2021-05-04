import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsFormComponent } from './bills-form.component';

describe('BillsFormComponent', () => {
  let component: BillsFormComponent;
  let fixture: ComponentFixture<BillsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
