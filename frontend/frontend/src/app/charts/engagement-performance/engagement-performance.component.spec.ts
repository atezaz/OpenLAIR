import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementPerformanceComponent } from './engagement-performance.component';

describe('EngagementPerformanceComponent', () => {
  let component: EngagementPerformanceComponent;
  let fixture: ComponentFixture<EngagementPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngagementPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
