import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingAnalyticsComponent } from './reading-analytics.component';

describe('ReadingAnalyticsComponent', () => {
  let component: ReadingAnalyticsComponent;
  let fixture: ComponentFixture<ReadingAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
