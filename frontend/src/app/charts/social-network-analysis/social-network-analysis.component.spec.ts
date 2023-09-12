import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworkAnalysisComponent } from './social-network-analysis.component';

describe('SocialNetworkAnalysisComponent', () => {
  let component: SocialNetworkAnalysisComponent;
  let fixture: ComponentFixture<SocialNetworkAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialNetworkAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNetworkAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
