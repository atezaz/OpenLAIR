import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferanceComponent } from './referance.component';

describe('ReferanceComponent', () => {
  let component: ReferanceComponent;
  let fixture: ComponentFixture<ReferanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
