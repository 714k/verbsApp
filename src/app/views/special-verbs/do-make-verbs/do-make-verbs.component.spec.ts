import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoMakeVerbsComponent } from './do-make-verbs.component';

describe('DoMakeVerbsComponent', () => {
  let component: DoMakeVerbsComponent;
  let fixture: ComponentFixture<DoMakeVerbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoMakeVerbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoMakeVerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
