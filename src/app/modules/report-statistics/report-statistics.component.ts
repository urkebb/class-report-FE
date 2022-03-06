import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StatisticsResponse } from 'src/app/models/interfaces/statistics-response';
import { Statistics } from 'src/app/models/statistics';
import { ReportService } from 'src/app/_services/report.service';

@Component({
  selector: 'app-report-statistics',
  templateUrl: './report-statistics.component.html',
  styleUrls: ['./report-statistics.component.scss'],
})
export class ReportStatisticsComponent implements OnInit {
  @Input() show: boolean = false;
  @Output() handleCloseStatistics: EventEmitter<void> = new EventEmitter();

  statistics!: Statistics;

  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.reportService.getStatistcs().subscribe((res) => {
      this.statistics = {
        averageProgress: res.statistics.averageProgress[0].averageProgress,
        correctNumbersPercent: res.statistics.correctNumbersPercent[0].percent,
      };
    });
  }

  hancleClick() {
    this.handleCloseStatistics.emit();
  }
}
