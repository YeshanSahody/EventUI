// communication.component.ts
import { Component, OnInit } from '@angular/core';

interface SupportTicket {
  id: number;
  issuesEncountered: string;
  departments: string;
  status: string;
  severity: number;
}

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {

  tickets: SupportTicket[] = [];

  filteredTickets: SupportTicket[] = []; // Initial state is unfiltered
  filters = {
    ticketId: '',
    issuesEncountered: '',
    departments: '',
    severity: ''
    // Add more filters as needed
  };

  constructor() { }

  ngOnInit(): void {
    // Generate dummy data entries with departments and severity levels
    this.tickets = this.generateDummyEventData(100);
    this.filteredTickets = [...this.tickets]; // Initial state is unfiltered
  }

  applyFilters(): void {
    // Apply filters based on the filter values
    this.filteredTickets = this.tickets.filter(ticket =>
      ticket.id.toString().includes(this.filters.ticketId) &&
      ticket.issuesEncountered.toLowerCase().includes(this.filters.issuesEncountered.toLowerCase()) &&
      ticket.departments.toLowerCase().includes(this.filters.departments.toLowerCase()) &&
      (this.filters.severity === '' || ticket.severity.toString() === this.filters.severity)
      // Add more conditions for other filters
    );
  }

  private generateDummyEventData(count: number): SupportTicket[] {
    const dummyEventData: SupportTicket[] = [];

    for (let i = 1; i <= count; i++) {
      let department: string;
      if (i % 3 === 0) {
        department = 'Payback Team';
      } else if (i % 3 === 1) {
        department = 'HR Team';
      } else {
        department = 'Fun @ Worx';
      }

      const severity = i % 3 + 1; // Severity levels 1, 2, 3

      dummyEventData.push({
        id: i,
        issuesEncountered: `Issue ${i}`,
        departments: department,
        status: i % 2 === 0 ? 'Resolved' : 'Open',
        severity: severity
      });
    }

    return dummyEventData;
  }
}
