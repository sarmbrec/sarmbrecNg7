import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceJumbotronComponent } from './experience-jumbotron.component';

describe('ExperienceJumbotronComponent', () => {
  let component: ExperienceJumbotronComponent;
  let fixture: ComponentFixture<ExperienceJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
