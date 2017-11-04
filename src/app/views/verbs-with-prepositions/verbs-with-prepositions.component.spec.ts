import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbsWithPrepositionsComponent } from './verbs-with-prepositions.component';

describe('VerbsWithPrepositionsComponent', () => {
  let component: VerbsWithPrepositionsComponent;
  let fixture: ComponentFixture<VerbsWithPrepositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbsWithPrepositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbsWithPrepositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
