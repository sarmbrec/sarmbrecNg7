import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultAngularLandingPageComponent } from './default-angular-landing-page.component';

describe('DefaultAngularLandingPageComponent', () => {
  let component: DefaultAngularLandingPageComponent;
  let fixture: ComponentFixture<DefaultAngularLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultAngularLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultAngularLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
