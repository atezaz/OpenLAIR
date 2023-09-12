import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAnalyticsComponent } from './video-analytics.component';

describe('VideoAnalyticsComponent', () => {
  let component: VideoAnalyticsComponent;
  let fixture: ComponentFixture<VideoAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
