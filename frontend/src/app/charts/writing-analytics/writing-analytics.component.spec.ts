import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingAnalyticsComponent } from './writing-analytics.component';

describe('WritingAnalyticsComponent', () => {
  let component: WritingAnalyticsComponent;
  let fixture: ComponentFixture<WritingAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritingAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
