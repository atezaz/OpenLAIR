import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfMotivationComponent } from './self-motivation.component';

describe('SelfMotivationComponent', () => {
  let component: SelfMotivationComponent;
  let fixture: ComponentFixture<SelfMotivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfMotivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfMotivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
