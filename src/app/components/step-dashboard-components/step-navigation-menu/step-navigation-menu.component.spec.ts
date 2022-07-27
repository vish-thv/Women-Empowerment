import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepNavigationMenuComponent } from './step-navigation-menu.component';

describe('StepNavigationMenuComponent', () => {
  let component: StepNavigationMenuComponent;
  let fixture: ComponentFixture<StepNavigationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepNavigationMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepNavigationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
