import { Report } from '../report.model';

export interface ReportsResponse {
  success: boolean;
  reports: Report[];
  reportsCount: number;
}
