import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionQualityComponent } from './discussion-quality.component';

describe('DiscussionQualityComponent', () => {
  let component: DiscussionQualityComponent;
  let fixture: ComponentFixture<DiscussionQualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionQualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
