import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkingVerbsComponent } from './linking-verbs.component';

describe('LinkingVerbsComponent', () => {
  let component: LinkingVerbsComponent;
  let fixture: ComponentFixture<LinkingVerbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkingVerbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkingVerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
