import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicVerbsComponent } from './dynamic-verbs.component';

describe('DynamicVerbsComponent', () => {
  let component: DynamicVerbsComponent;
  let fixture: ComponentFixture<DynamicVerbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicVerbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicVerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
