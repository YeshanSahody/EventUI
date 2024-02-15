
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EventDisplayComponent } from './components/event-display/event-display.component';
import { FaqComponent } from './components/faq/faq.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'event-display', component: EventDisplayComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'analytics', component: AnalyticsComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
