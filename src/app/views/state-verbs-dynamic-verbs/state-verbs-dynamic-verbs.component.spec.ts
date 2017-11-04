import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateVerbsDynamicVerbsComponent } from './state-verbs-dynamic-verbs.component';

describe('StateVerbsDynamicVerbsComponent', () => {
  let component: StateVerbsDynamicVerbsComponent;
  let fixture: ComponentFixture<StateVerbsDynamicVerbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateVerbsDynamicVerbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateVerbsDynamicVerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
