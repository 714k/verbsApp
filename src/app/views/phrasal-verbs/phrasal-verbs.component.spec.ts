import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrasalVerbsComponent } from './phrasal-verbs.component';

describe('PhrasalVerbsComponent', () => {
  let component: PhrasalVerbsComponent;
  let fixture: ComponentFixture<PhrasalVerbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhrasalVerbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrasalVerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
