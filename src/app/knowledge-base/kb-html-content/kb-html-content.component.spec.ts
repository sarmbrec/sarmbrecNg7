import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KbHtmlContentComponent } from './kb-html-content.component';

describe('KbHtmlContentComponent', () => {
  let component: KbHtmlContentComponent;
  let fixture: ComponentFixture<KbHtmlContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KbHtmlContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KbHtmlContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
