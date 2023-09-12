import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningBehaviorPatternsComponent } from './learning-behavior-patterns.component';

describe('LearningBehaviorPatternsComponent', () => {
  let component: LearningBehaviorPatternsComponent;
  let fixture: ComponentFixture<LearningBehaviorPatternsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningBehaviorPatternsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningBehaviorPatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
