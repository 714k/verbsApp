import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticVerbsComponent } from './static-verbs.component';

describe('StaticVerbsComponent', () => {
  let component: StaticVerbsComponent;
  let fixture: ComponentFixture<StaticVerbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticVerbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticVerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
