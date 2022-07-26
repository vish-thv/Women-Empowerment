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
import { StatusComponent } from './components/step-dashboard-components/status/status.component';
import { TrainingSectorsComponent } from './components/step-dashboard-components/training-sectors/training-sectors.component';
import { StepDashboardComponent } from './components/step-dashboard/step-dashboard.component';

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
      {path: 'registration', component: RegistrationComponent},
      {path: 'ngos', component: NgosComponent},
      {path: 'training-sectors', component: TrainingSectorsComponent},
      {path: 'guidelines', component: GuidelinesComponent},
      {path: 'faq', component: FaqComponent},
      {path: 'status', component: StatusComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
