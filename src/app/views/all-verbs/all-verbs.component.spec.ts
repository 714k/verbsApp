import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVerbsComponent } from './all-verbs.component';

describe('AllVerbsComponent', () => {
  let component: AllVerbsComponent;
  let fixture: ComponentFixture<AllVerbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllVerbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
