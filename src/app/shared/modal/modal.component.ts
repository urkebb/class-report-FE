import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() heading!: string;
  @Input() show: boolean = false;
  @Input() error: boolean = false;
  @Output() handleClose: EventEmitter<void> = new EventEmitter();

  constructor() {}

  handleClick() {
    this.handleClose.emit();
  }
}
