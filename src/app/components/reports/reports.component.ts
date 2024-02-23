import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {

  constructor() { }

  seeReports(team: string) {
    // Assuming you have the PDF reports stored in a directory accessible by the application
    let url: string;

    switch (team) {
      case 'FunAtWork':
        url = 'path_to_fun_at_work_reports';
        break;
      case 'PayBackTeam':
        url = 'path_to_payback_team_reports';
        break;
      case 'HRTeam':
        url = 'path_to_hr_team_reports';
        break;
      default:
        url = '';
        break;
    }

    // Open the PDF report in a new tab
    window.open(url, '_blank');
  }
}
