import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepDashboardMainComponent } from './step-dashboard-main.component';

describe('StepDashboardMainComponent', () => {
  let component: StepDashboardMainComponent;
  let fixture: ComponentFixture<StepDashboardMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepDashboardMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepDashboardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
