
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EventDisplayComponent } from './components/event-display/event-display.component';
import { FaqComponent } from './components/faq/faq.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { FinanceComponent } from './components/finance/finance.component';
import { EventsComponent } from './components/events/events.component';
import { GroupLeadersComponent } from './components/group-leaders/group-leaders.component';
import { TeamLeadersComponent } from './components/team-leaders/team-leaders.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ReportsComponent } from './components/reports/reports.component';
import { EventRegistrationComponent } from './components/event-registration/event-registration.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FeedbackComponent } from './components/feedback/feedback.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'event-display', component: EventDisplayComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'events', component: EventsComponent },
  { path: 'group-leaders', component: GroupLeadersComponent },
  { path: 'team-leaders', component: TeamLeadersComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'event-registration', component: EventRegistrationComponent },
  { path: 'myprofile', component: MyprofileComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'login', component: LoginComponent },

  
  { path: '**', redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
