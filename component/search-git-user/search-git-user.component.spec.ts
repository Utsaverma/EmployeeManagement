import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGitUserComponent } from './search-git-user.component';

describe('SearchGitUserComponent', () => {
  let component: SearchGitUserComponent;
  let fixture: ComponentFixture<SearchGitUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGitUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGitUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
