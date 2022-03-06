import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Report } from 'src/app/models/report.model';
import { ReportService } from 'src/app/_services/report.service';
import { SpinnerService } from 'src/app/_services/spinner.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent {
  reports!: Report[];
  reportsPerPage = 100;
  page: number = 0;
  pageCount!: number;
  dropdownItems: number[] = [];
  showStatistics: boolean = false;
  form!: FormGroup;
  searchedByUserId: boolean = false;
  searchError = {
    error: false,
    message: '',
  };

  constructor(
    public reportService: ReportService,
    private fb: FormBuilder,
    public spinnerService: SpinnerService
  ) {
    this.form = this.fb.group({
      userID: [null],
    });

    this.fetchReports();
  }

  handlePreviousPage() {
    if (this.page === 0) return;
    this.page -= 1;
    this.fetchReports();
  }

  handleNextPage() {
    if (this.page === this.pageCount - 1) return;
    this.page += 1;
    this.fetchReports();
  }

  handleStatistics() {
    this.showStatistics = true;
  }

  handleDropdown(value: number) {
    this.page = value;
    this.fetchReports();
  }

  handleSubmit() {
    if (!this.form.get('userID')?.value) {
      this.searchedByUserId = false;
      this.page = 0;
      this.fetchReports();
      return;
    }
    if (this.page !== 0) this.page = 0;

    this.searchedByUserId = true;
    this.fetchReports();
  }

  // ? HELPER FUNCTION

  fetchReports() {
    this.spinnerService.show = true;
    if (this.searchedByUserId) {
      this.reportService
        .searchByUserID(
          this.form.get('userID')?.value,
          this.page,
          this.reportsPerPage
        )
        .subscribe((res) => {
          this.spinnerService.show = false;
          if (!res.reports.length) {
            this.searchError = {
              error: true,
              message: 'There is no User with provided ID.',
            };
            return;
          }

          this.reports = res.reports;
          this.pageCount = Math.ceil(res.reportsCount / this.reportsPerPage);
          console.log(this.pageCount);
          this.dropdownItems = [];
          for (let i = -1; i < this.pageCount - 1; i++) {
            this.dropdownItems.push(i + 1);
          }
        });
    } else {
      this.reportService
        .getAll(this.page, this.reportsPerPage)
        .subscribe((res) => {
          this.spinnerService.show = false;
          this.reports = res.reports;

          this.pageCount = Math.ceil(res.reportsCount / this.reportsPerPage);
          this.dropdownItems = [];
          for (let i = -1; i < this.pageCount - 1; i = i + 5) {
            this.dropdownItems.push(i + 1);
          }
        });
    }
  }
}
