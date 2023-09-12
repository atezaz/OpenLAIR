import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusteringComponent } from './clustering.component';

describe('ClusteringComponent', () => {
  let component: ClusteringComponent;
  let fixture: ComponentFixture<ClusteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
