import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitiveVerbsComponent } from './transitive-verbs.component';

describe('TransitiveVerbsComponent', () => {
  let component: TransitiveVerbsComponent;
  let fixture: ComponentFixture<TransitiveVerbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitiveVerbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitiveVerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
