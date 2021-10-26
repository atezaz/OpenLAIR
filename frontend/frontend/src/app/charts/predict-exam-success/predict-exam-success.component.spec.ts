import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictExamSuccessComponent } from './predict-exam-success.component';

describe('PredictExamSuccessComponent', () => {
  let component: PredictExamSuccessComponent;
  let fixture: ComponentFixture<PredictExamSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictExamSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictExamSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
