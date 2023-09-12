import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoEngagementsComponent } from './video-engagements.component';

describe('VideoEngagementsComponent', () => {
  let component: VideoEngagementsComponent;
  let fixture: ComponentFixture<VideoEngagementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoEngagementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoEngagementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
