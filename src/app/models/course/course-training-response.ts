import { TrainingResponse } from '../training/training-response';
import { CourseResponse } from './course-response';

export interface CourseTrainingResponse {
  courseID: number;
  course?: CourseResponse;
  trainingID: number;
  training?: TrainingResponse;
}
