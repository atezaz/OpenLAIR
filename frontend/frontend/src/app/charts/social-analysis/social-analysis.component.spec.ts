import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAnalysisComponent } from './social-analysis.component';

describe('SocialAnalysisComponent', () => {
  let component: SocialAnalysisComponent;
  let fixture: ComponentFixture<SocialAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
