import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepAddressDetailsComponent } from './step-address-details.component';

describe('StepAddressDetailsComponent', () => {
  let component: StepAddressDetailsComponent;
  let fixture: ComponentFixture<StepAddressDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepAddressDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepAddressDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
