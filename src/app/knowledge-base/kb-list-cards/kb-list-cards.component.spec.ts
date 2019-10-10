import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KbListCardsComponent } from './kb-list-cards.component';

describe('KbListCardsComponent', () => {
  let component: KbListCardsComponent;
  let fixture: ComponentFixture<KbListCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KbListCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KbListCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
