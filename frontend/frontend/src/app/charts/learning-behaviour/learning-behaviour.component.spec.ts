import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningBehaviourComponent } from './learning-behaviour.component';

describe('LearningBehaviourComponent', () => {
  let component: LearningBehaviourComponent;
  let fixture: ComponentFixture<LearningBehaviourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningBehaviourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningBehaviourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
