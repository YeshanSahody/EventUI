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
        url = '#/analytics';
        break;
      case 'PayBackTeam':
        url = '#/analytics';
        break;
      case 'HRTeam':
        url = '#/analytics';
        break;
      default:
        url = '';
        break;
    }

    // Open the PDF report in a new tab
    window.open(url, '_blank');
  }
}
