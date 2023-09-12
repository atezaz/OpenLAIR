import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComparisonComponent } from './student-comparison.component';

describe('StudentComparisonComponent', () => {
  let component: StudentComparisonComponent;
  let fixture: ComponentFixture<StudentComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
