import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalGradePredictionComponent } from './final-grade-prediction.component';

describe('FinalGradePredictionComponent', () => {
  let component: FinalGradePredictionComponent;
  let fixture: ComponentFixture<FinalGradePredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalGradePredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalGradePredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
