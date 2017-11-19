import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HadBetterVerbsComponent } from './had-better-verbs.component';

describe('HadBetterVerbsComponent', () => {
  let component: HadBetterVerbsComponent;
  let fixture: ComponentFixture<HadBetterVerbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HadBetterVerbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HadBetterVerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
