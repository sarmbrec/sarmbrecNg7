import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KbJumbotronComponent } from './kb-jumbotron.component';

describe('KbJumbotronComponent', () => {
  let component: KbJumbotronComponent;
  let fixture: ComponentFixture<KbJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KbJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KbJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
