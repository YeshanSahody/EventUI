import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor() {}

  selectedRole: string = '';

  setSelectedRole(role: string) {
    this.selectedRole = role;
  }

  getSelectedRole() {
    return this.selectedRole;
  }
}
