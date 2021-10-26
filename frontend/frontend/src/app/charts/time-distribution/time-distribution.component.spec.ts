import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDistributionComponent } from './time-distribution.component';

describe('TimeDistributionComponent', () => {
  let component: TimeDistributionComponent;
  let fixture: ComponentFixture<TimeDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
