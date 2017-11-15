import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryHelpingVerbsComponent } from './primary-helping-verbs.component';

describe('PrimaryHelpingVerbsComponent', () => {
  let component: PrimaryHelpingVerbsComponent;
  let fixture: ComponentFixture<PrimaryHelpingVerbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryHelpingVerbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryHelpingVerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
