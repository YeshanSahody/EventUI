import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  // Define roles (could be enums or constants)
  readonly USER_ROLE = 'user';
  readonly GROUP_LEADER_ROLE = 'group_leader';
  readonly TEAM_MEMBER_ROLE = 'team_member';
  readonly ADMIN_ROLE = 'admin';

  // Input property to receive user role
  @Input() userRole!: string; // Using non-null assertion operator

  // Function to check if a feature is accessible based on user role
  isFeatureAccessible(featureRole: string): boolean {
    switch (this.userRole) {
      case this.USER_ROLE:
        return featureRole === this.USER_ROLE || featureRole === this.ADMIN_ROLE;
      case this.GROUP_LEADER_ROLE:
        return featureRole === this.GROUP_LEADER_ROLE || featureRole === this.ADMIN_ROLE;
      case this.TEAM_MEMBER_ROLE:
        return featureRole === this.TEAM_MEMBER_ROLE || featureRole === this.ADMIN_ROLE;
      case this.ADMIN_ROLE:
        return true;
      default:
        return false;
    }
  }
}
