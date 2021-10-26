import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDifficultyComponent } from './course-difficulty.component';

describe('CourseDifficultyComponent', () => {
  let component: CourseDifficultyComponent;
  let fixture: ComponentFixture<CourseDifficultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDifficultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDifficultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
