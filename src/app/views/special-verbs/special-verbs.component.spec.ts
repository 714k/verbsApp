import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialVerbsComponent } from './special-verbs.component';

describe('SpecialVerbsComponent', () => {
  let component: SpecialVerbsComponent;
  let fixture: ComponentFixture<SpecialVerbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialVerbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialVerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
