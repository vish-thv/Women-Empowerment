import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepDashboardContentHeaderComponent } from './step-dashboard-content-header.component';

describe('StepDashboardContentHeaderComponent', () => {
  let component: StepDashboardContentHeaderComponent;
  let fixture: ComponentFixture<StepDashboardContentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepDashboardContentHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepDashboardContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
