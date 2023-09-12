import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectiveStateComponent } from './affective-state.component';

describe('AffectiveStateComponent', () => {
  let component: AffectiveStateComponent;
  let fixture: ComponentFixture<AffectiveStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffectiveStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectiveStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
