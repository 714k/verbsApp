import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbToBeComponent } from './verb-to-be.component';

describe('VerbToBeComponent', () => {
  let component: VerbToBeComponent;
  let fixture: ComponentFixture<VerbToBeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbToBeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbToBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
