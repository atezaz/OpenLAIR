import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumUsageComponent } from './curriculum-usage.component';

describe('CurriculumUsageComponent', () => {
  let component: CurriculumUsageComponent;
  let fixture: ComponentFixture<CurriculumUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculumUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
