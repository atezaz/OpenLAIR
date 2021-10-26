import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineChangeDetectionComponent } from './online-change-detection.component';

describe('OnlineChangeDetectionComponent', () => {
  let component: OnlineChangeDetectionComponent;
  let fixture: ComponentFixture<OnlineChangeDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineChangeDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
