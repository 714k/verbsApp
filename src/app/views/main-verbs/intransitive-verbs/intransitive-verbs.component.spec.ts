import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntransitiveVerbsComponent } from './intransitive-verbs.component';

describe('IntransitiveVerbsComponent', () => {
  let component: IntransitiveVerbsComponent;
  let fixture: ComponentFixture<IntransitiveVerbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntransitiveVerbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntransitiveVerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
