import { Component } from '@angular/core';

@Component({
  selector: 'app-group-leaders',
  templateUrl: './group-leaders.component.html',
  styleUrls: ['./group-leaders.component.scss']
})
export class GroupLeadersComponent {
  leaders = [
    {
      name: 'Group Leader',
      photo: '../../../assets/images/spark/03.png',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod.',
      expanded: false
    },
    {
      name: 'Vice-Leader',
      photo: '../../../assets/images/spark/03.png',
      bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      expanded: false
    },
    // Add more leaders as needed
    {
      name: 'Treasury',
      photo: '../../../assets/images/spark/03.png',
      bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      expanded: false
    },
    {
      name: 'Secretary',
      photo: '../../../assets/images/spark/03.png',
      bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      expanded: false
    },

    {
      name: 'Spokesperson',
      photo: '../../../assets/images/spark/03.png',
      bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      expanded: false
    },

    {
      name: 'Subject Matter Expert',
      photo: '../../../assets/images/spark/03.png',
      bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      expanded: false
    },
  ];

  expandBio(leader: any): void {
    leader.expanded = !leader.expanded;
  }
}
