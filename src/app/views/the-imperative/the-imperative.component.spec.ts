import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheImperativeComponent } from './the-imperative.component';

describe('TheImperativeComponent', () => {
  let component: TheImperativeComponent;
  let fixture: ComponentFixture<TheImperativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheImperativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheImperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
