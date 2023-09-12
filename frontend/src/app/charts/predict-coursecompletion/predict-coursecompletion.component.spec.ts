import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictCoursecompletionComponent } from './predict-coursecompletion.component';

describe('PredictCoursecompletionComponent', () => {
  let component: PredictCoursecompletionComponent;
  let fixture: ComponentFixture<PredictCoursecompletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictCoursecompletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictCoursecompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
