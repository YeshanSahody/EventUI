import { UserCourseResponse } from '../user/user-course-response';
import { CourseTrainingResponse } from './course-training-response';

export interface CourseResponse {
  courseID: string;
  courseName: string;
  description: string;
  userCourses?: UserCourseResponse[];
  courseTrainings?: CourseTrainingResponse[];
}
