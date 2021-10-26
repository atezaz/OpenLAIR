import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassingRatePredictionComponent } from './passing-rate-prediction.component';

describe('PassingRatePredictionComponent', () => {
  let component: PassingRatePredictionComponent;
  let fixture: ComponentFixture<PassingRatePredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassingRatePredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassingRatePredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
