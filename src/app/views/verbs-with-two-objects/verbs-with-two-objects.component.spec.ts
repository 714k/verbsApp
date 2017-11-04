import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbsWithTwoObjectsComponent } from './verbs-with-two-objects.component';

describe('VerbsWithTwoObjectsComponent', () => {
  let component: VerbsWithTwoObjectsComponent;
  let fixture: ComponentFixture<VerbsWithTwoObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbsWithTwoObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbsWithTwoObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
