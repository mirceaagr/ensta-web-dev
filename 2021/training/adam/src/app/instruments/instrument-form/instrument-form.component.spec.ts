import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentFormComponent } from './instrument-form.component';

describe('InstrumentFormComponent', () => {
  let component: InstrumentFormComponent;
  let fixture: ComponentFixture<InstrumentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
