import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHelpingVerbsComponent } from './modal-helping-verbs.component';

describe('ModalHelpingVerbsComponent', () => {
  let component: ModalHelpingVerbsComponent;
  let fixture: ComponentFixture<ModalHelpingVerbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHelpingVerbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHelpingVerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
