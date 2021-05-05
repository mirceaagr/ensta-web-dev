import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentEditComponent } from './instrument-edit.component';

describe('InstrumentEditComponent', () => {
  let component: InstrumentEditComponent;
  let fixture: ComponentFixture<InstrumentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
