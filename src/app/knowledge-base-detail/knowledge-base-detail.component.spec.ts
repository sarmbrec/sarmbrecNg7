import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeBaseDetailComponent } from './knowledge-base-detail.component';

describe('KnowledgeBaseDetailComponent', () => {
  let component: KnowledgeBaseDetailComponent;
  let fixture: ComponentFixture<KnowledgeBaseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeBaseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeBaseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
