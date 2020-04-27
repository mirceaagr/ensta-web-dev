import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaAddComponent } from './pizza-add.component';

describe('PizzaAddComponent', () => {
  let component: PizzaAddComponent;
  let fixture: ComponentFixture<PizzaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
