import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePlanningComponent } from './time-planning.component';

describe('TimePlanningComponent', () => {
  let component: TimePlanningComponent;
  let fixture: ComponentFixture<TimePlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
