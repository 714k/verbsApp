import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiModalHelpingVerbsComponent } from './semi-modal-helping-verbs.component';

describe('SemiModalHelpingVerbsComponent', () => {
  let component: SemiModalHelpingVerbsComponent;
  let fixture: ComponentFixture<SemiModalHelpingVerbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemiModalHelpingVerbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiModalHelpingVerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
