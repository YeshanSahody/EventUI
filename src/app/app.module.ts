import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SdwdsHeaderComponent, SdwdsHeaderNavbarComponent, SdwdsHeaderNavbarDividerComponent, SdwdsHeaderNavbarItemComponent } from '@sdworx/sdwds/header';
import { SdwdsPasswordInputComponent } from '@sdworx/sdwds/password-input';
import { SdwdsDrawerComponent } from '@sdworx/sdwds/drawer';
import { SdwdsSidenavComponent, SdwdsSidenavItemComponent, } from '@sdworx/sdwds/sidenav';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';
import { SdwdsHeaderProfileButtonComponent, SdwdsHeaderProfileComponent, SdwdsHeaderProfileLinkComponent, SdwdsHeaderProfileListComponent, SdwdsHeaderProfileSelectComponent, } from '@sdworx/sdwds/header-profile';
import { InterceptorsProviders } from './interceptors/interceptors';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    SdwdsHeaderComponent,
    HighchartsChartModule,
    SdwdsHeaderNavbarComponent,
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    SdwdsHeaderComponent,
    SdwdsHeaderNavbarComponent,
    SdwdsHeaderNavbarItemComponent,
    SdwdsDrawerComponent,
    SdwdsPasswordInputComponent,
    SdwdsSidenavComponent,
    SdwdsSidenavItemComponent, SdwdsHeaderNavbarDividerComponent,
    FullCalendarModule,
    NgbModule,
    NgSelectModule,
    NgbDatepickerModule,
    SdwdsHeaderProfileComponent,
    SdwdsHeaderProfileButtonComponent,
    SdwdsHeaderProfileLinkComponent,
    SdwdsHeaderProfileSelectComponent,
    SdwdsHeaderProfileListComponent,
    NgbDropdownModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token'); // Adjust based on your storage implementation
        },
      },
    }),
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    InterceptorsProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  applicationName: string = 'SD events';
}
