import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroppingoutComponent } from './droppingout.component';

describe('DroppingoutComponent', () => {
  let component: DroppingoutComponent;
  let fixture: ComponentFixture<DroppingoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroppingoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroppingoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
