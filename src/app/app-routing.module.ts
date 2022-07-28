import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdminComponent } from './components/home-components/admin/admin.component';
import { FaqComponent } from './components/home-components/faq/faq.component';
import { HomeContentComponent } from './components/home-components/home-content/home-content.component';
import { LegislationAndPolicyComponent } from './components/home-components/legislation-and-policy/legislation-and-policy.component';
import { NgoComponent } from './components/home-components/ngo/ngo.component';
import { StepComponent } from './components/home-components/step/step.component';
import { HomeComponent } from './components/home/home.component';
import { GuidelinesComponent } from './components/step-dashboard-components/guidelines/guidelines.component';
import { NgosComponent } from './components/step-dashboard-components/ngos/ngos.component';
import { RegistrationComponent } from './components/step-dashboard-components/registration/registration.component';
import { StepStatusComponent } from './components/step-dashboard-components/step-status/step-status.component';
import { StepFaqComponent } from './components/step-dashboard-components/step-faq/step-faq.component';
import { TrainingSectorsComponent } from './components/step-dashboard-components/training-sectors/training-sectors.component';
import { StepDashboardComponent } from './components/step-dashboard/step-dashboard.component';
import { StepDashboardMainComponent } from './components/step-dashboard-components/step-dashboard-main/step-dashboard-main.component';
import { StepPersonalDetailsComponent } from './components/step-dashboard-components/forms/step-personal-details/step-personal-details.component';
import { StepAddressDetailsComponent } from './components/step-dashboard-components/forms/step-address-details/step-address-details.component';
import { StepFamilyDetailsComponent } from './components/step-dashboard-components/forms/step-family-details/step-family-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // Home
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: '', component: HomeContentComponent},
      {path: 'step', component: StepComponent},
      {path: 'ngo', component: NgoComponent},
      {path: 'admin', component: AdminComponent},
      {path: 'legislation-and-policy', component: LegislationAndPolicyComponent},
      {path: 'faq', component: FaqComponent},
      {path: 'about-us', component: AboutUsComponent},
    ]
  },

  // STEP Dashboard
  {
    path: 'step',
    component: StepDashboardComponent,
    children: [
      {path: 'dashboard', component: StepDashboardMainComponent},
      {
        path: 'registration', 
        component: RegistrationComponent,
        children: [
          {path: 'trainee-personal-details', component: StepPersonalDetailsComponent},
          {path: 'trainee-family-details', component: StepFamilyDetailsComponent},
          {path: 'trainee-address-details', component: StepAddressDetailsComponent}
        ]
      },
      {path: 'ngos', component: NgosComponent},
      {path: 'training-sectors', component: TrainingSectorsComponent},
      {path: 'guidelines', component: GuidelinesComponent},
      {path: 'faq', component: StepFaqComponent},
      {path: 'status', component: StepStatusComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
