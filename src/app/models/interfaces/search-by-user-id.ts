import { Report } from '../report.model';

export interface SearchByUserId {
  success: boolean;
  reportsCount: number;
  reports: Report[];
}
