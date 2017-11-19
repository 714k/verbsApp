import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WillGoingToVerbsComponent } from './will-going-to-verbs.component';

describe('WillGoingToVerbsComponent', () => {
  let component: WillGoingToVerbsComponent;
  let fixture: ComponentFixture<WillGoingToVerbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WillGoingToVerbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WillGoingToVerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
