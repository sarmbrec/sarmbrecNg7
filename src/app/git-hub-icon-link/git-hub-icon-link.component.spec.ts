import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubIconLinkComponent } from './git-hub-icon-link.component';

describe('GitHubIconLinkComponent', () => {
  let component: GitHubIconLinkComponent;
  let fixture: ComponentFixture<GitHubIconLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubIconLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubIconLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
