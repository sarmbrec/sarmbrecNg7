import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyUsedComponent } from './technology-used.component';

describe('TechnologyUsedComponent', () => {
  let component: TechnologyUsedComponent;
  let fixture: ComponentFixture<TechnologyUsedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyUsedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
