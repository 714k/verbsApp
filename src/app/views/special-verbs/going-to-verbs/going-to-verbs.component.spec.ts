import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoingToVerbsComponent } from './going-to-verbs.component';

describe('GoingToVerbsComponent', () => {
  let component: GoingToVerbsComponent;
  let fixture: ComponentFixture<GoingToVerbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoingToVerbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoingToVerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
