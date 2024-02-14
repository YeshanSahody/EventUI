export interface TrainingResponse {
  trainingID: number;
  location: string;
  startDate: Date;
  endDate: Date;
  topic: string;
  attendances?: any;
}
