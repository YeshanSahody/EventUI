import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLeadersComponent } from './team-leaders.component';

describe('TeamLeadersComponent', () => {
  let component: TeamLeadersComponent;
  let fixture: ComponentFixture<TeamLeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamLeadersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
