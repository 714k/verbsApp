import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVerbsComponent } from './main-verbs.component';

describe('MainVerbsComponent', () => {
  let component: MainVerbsComponent;
  let fixture: ComponentFixture<MainVerbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainVerbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainVerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
