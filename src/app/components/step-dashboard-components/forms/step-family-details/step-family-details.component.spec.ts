import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFamilyDetailsComponent } from './step-family-details.component';

describe('StepFamilyDetailsComponent', () => {
  let component: StepFamilyDetailsComponent;
  let fixture: ComponentFixture<StepFamilyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepFamilyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepFamilyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
