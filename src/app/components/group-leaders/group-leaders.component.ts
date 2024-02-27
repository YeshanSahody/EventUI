import { Component } from '@angular/core';

@Component({
  selector: 'app-group-leaders',
  templateUrl: './group-leaders.component.html',
  styleUrls: ['./group-leaders.component.scss']
})
export class GroupLeadersComponent {
  leaders = [
    {
      name: 'Event Management Director',
      photo: '../../../assets/images/spark/03.png',
      bio: 'As the Event Management Director at SD Worx, I oversee the planning and execution of all company events. With years of experience in event coordination and a passion for creating memorable experiences, I strive to ensure that every event is a success.',
      expanded: false
    },
    {
      name: 'Assistant Director',
      photo: '../../../assets/images/spark/03.png',
      bio: 'In my role as Assistant Director, I support the Event Management Director in organizing and managing various aspects of our events. From coordinating logistics to liaising with vendors, I work tirelessly to ensure smooth operations and exceptional experiences for all attendees.',
      expanded: false
    },
    {
      name: 'Event Coordinator',
      photo: '../../../assets/images/spark/03.png',
      bio: 'As an Event Coordinator, I am responsible for planning and executing specific events within the company. From concept development to on-site management, I work closely with the team to bring our event ideas to life and create engaging experiences for our employees.',
      expanded: false
    },
    {
      name: 'Marketing Specialist',
      photo: '../../../assets/images/spark/03.png',
      bio: 'As the Marketing Specialist for the Event Management team, I focus on promoting our events and increasing attendance. Through strategic marketing campaigns and creative initiatives, I help generate excitement and drive participation in our company-wide activities.',
      expanded: false
    },
    {
      name: 'Logistics Coordinator',
      photo: '../../../assets/images/spark/03.png',
      bio: 'As the Logistics Coordinator, I handle all aspects of event planning related to logistics and operations. From venue selection to transportation coordination, I ensure that every detail is carefully managed to create seamless and memorable events for our employees.',
      expanded: false
    },
    {
      name: 'Volunteer Coordinator',
      photo: '../../../assets/images/spark/03.png',
      bio: 'As the Volunteer Coordinator, I recruit and manage volunteers to support our event activities. With a focus on teamwork and collaboration, I work to build a strong volunteer network and provide opportunities for employees to contribute to the success of our events.',
      expanded: false
    },
  ];


  expandBio(leader: any): void {
    leader.expanded = !leader.expanded;
  }
}
