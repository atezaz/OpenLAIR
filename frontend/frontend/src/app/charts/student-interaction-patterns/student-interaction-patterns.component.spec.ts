import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInteractionPatternsComponent } from './student-interaction-patterns.component';

describe('StudentInteractionPatternsComponent', () => {
  let component: StudentInteractionPatternsComponent;
  let fixture: ComponentFixture<StudentInteractionPatternsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentInteractionPatternsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentInteractionPatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
