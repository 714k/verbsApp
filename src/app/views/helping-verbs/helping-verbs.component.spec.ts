import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpingVerbsComponent } from './helping-verbs.component';

describe('HelpingVerbsComponent', () => {
  let component: HelpingVerbsComponent;
  let fixture: ComponentFixture<HelpingVerbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpingVerbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpingVerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
