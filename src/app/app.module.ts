import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StepDashboardComponent } from './components/step-dashboard/step-dashboard.component';
import { NgoDashboardComponent } from './components/ngo-dashboard/ngo-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { StepComponent } from './components/home-components/step/step.component';
import { LegislationAndPolicyComponent } from './components/home-components/legislation-and-policy/legislation-and-policy.component';
import { NgoComponent } from './components/home-components/ngo/ngo.component';
import { AdminComponent } from './components/home-components/admin/admin.component';
import { FaqComponent } from './components/home-components/faq/faq.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RegistrationComponent } from './components/step-dashboard-components/registration/registration.component';
import { NgosComponent } from './components/step-dashboard-components/ngos/ngos.component';
import { StatusComponent } from './components/step-dashboard-components/status/status.component';
import { GuidelinesComponent } from './components/step-dashboard-components/guidelines/guidelines.component';
import { TrainingSectorsComponent } from './components/step-dashboard-components/training-sectors/training-sectors.component';
import { HomeContentComponent } from './components/home-components/home-content/home-content.component';
import { FooterComponent } from './components/home-components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StepDashboardComponent,
    NgoDashboardComponent,
    AdminDashboardComponent,
    StepComponent,
    LegislationAndPolicyComponent,
    NgoComponent,
    AdminComponent,
    FaqComponent,
    AboutUsComponent,
    RegistrationComponent,
    NgosComponent,
    StatusComponent,
    GuidelinesComponent,
    TrainingSectorsComponent,
    HomeContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    [FlexLayoutModule],
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
