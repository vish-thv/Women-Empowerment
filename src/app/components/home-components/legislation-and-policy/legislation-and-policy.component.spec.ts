import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegislationAndPolicyComponent } from './legislation-and-policy.component';

describe('LegislationAndPolicyComponent', () => {
  let component: LegislationAndPolicyComponent;
  let fixture: ComponentFixture<LegislationAndPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegislationAndPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegislationAndPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
