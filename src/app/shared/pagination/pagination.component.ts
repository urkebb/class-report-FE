import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Output() handleNext: EventEmitter<void> = new EventEmitter();
  @Output() handlePrevious: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handlePreviousPage() {
    this.handlePrevious.emit();
  }

  handleNextPage() {
    this.handleNext.emit();
  }
}
