import { CourseResponse } from '../course/course-response';
import { Role } from './role';
import { UserResponse } from './user-response';

export interface UserCourseResponse {
  userID: number;
  user?: UserResponse;
  role: Role;
  courseID: number;
  course?: CourseResponse;
}
