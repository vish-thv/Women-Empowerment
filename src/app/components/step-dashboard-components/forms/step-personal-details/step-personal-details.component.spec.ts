import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPersonalDetailsComponent } from './step-personal-details.component';

describe('StepPersonalDetailsComponent', () => {
  let component: StepPersonalDetailsComponent;
  let fixture: ComponentFixture<StepPersonalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepPersonalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepPersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
