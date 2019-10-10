import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgObservableComponent } from './ng-observable.component';

describe('NgObservableComponent', () => {
  let component: NgObservableComponent;
  let fixture: ComponentFixture<NgObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
