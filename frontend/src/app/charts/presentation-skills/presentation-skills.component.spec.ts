import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationSkillsComponent } from './presentation-skills.component';

describe('PresentationSkillsComponent', () => {
  let component: PresentationSkillsComponent;
  let fixture: ComponentFixture<PresentationSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
