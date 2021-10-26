import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupParticipationComponent } from './group-participation.component';

describe('GroupParticipationComponent', () => {
  let component: GroupParticipationComponent;
  let fixture: ComponentFixture<GroupParticipationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupParticipationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
