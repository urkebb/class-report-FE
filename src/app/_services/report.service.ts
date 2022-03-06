import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ReportsResponse } from '../models/interfaces/reports-response';
import { SearchByUserId } from '../models/interfaces/search-by-user-id';
import { StatisticsResponse } from '../models/interfaces/statistics-response';
import { Report } from '../models/report.model';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  reports: Report[] = [];

  constructor(private http: HttpClient) {}

  getAll(page: number, reportsPerPage: number) {
    return this.http.get<ReportsResponse>(`${environment.api}report`, {
      params: {
        page: page,
        limit: reportsPerPage,
      },
    });
  }

  searchByUserID(userID: number, page: number, reportsPerPage: number) {
    return this.http.get<SearchByUserId>(`${environment.api}report/${userID}`, {
      params: {
        page: page,
        limit: reportsPerPage,
      },
    });
  }

  getStatistcs() {
    return this.http.get<StatisticsResponse>(
      `${environment.api}report/statistics`
    );
  }
}
