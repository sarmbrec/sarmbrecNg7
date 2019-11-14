import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagenatorComponent } from './engagenator.component';

describe('EngagenatorComponent', () => {
  let component: EngagenatorComponent;
  let fixture: ComponentFixture<EngagenatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngagenatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagenatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
