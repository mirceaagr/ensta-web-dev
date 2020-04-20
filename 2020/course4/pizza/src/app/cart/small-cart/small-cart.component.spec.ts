import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCartComponent } from './small-cart.component';

describe('SmallCartComponent', () => {
  let component: SmallCartComponent;
  let fixture: ComponentFixture<SmallCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
