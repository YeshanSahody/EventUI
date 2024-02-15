import { Role } from './role';

export interface UserResponse {
  userID: string;
  username: string;
  password: string;
  role: Role;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  phone: string;
  avatar: string;
}
