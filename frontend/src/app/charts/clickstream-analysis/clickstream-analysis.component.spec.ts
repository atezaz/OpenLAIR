import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickstreamAnalysisComponent } from './clickstream-analysis.component';

describe('ClickstreamAnalysisComponent', () => {
  let component: ClickstreamAnalysisComponent;
  let fixture: ComponentFixture<ClickstreamAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickstreamAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickstreamAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
