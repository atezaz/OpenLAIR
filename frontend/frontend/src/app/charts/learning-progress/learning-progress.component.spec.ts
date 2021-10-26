import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningProgressComponent } from './learning-progress.component';

describe('LearningProgressComponent', () => {
  let component: LearningProgressComponent;
  let fixture: ComponentFixture<LearningProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
