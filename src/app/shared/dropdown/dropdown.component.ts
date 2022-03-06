import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() items!: number[];
  @Input() text!: string;
  @Output() clicked: EventEmitter<number> = new EventEmitter();
  show: boolean = false;
  value = 'Action';

  constructor() {}

  handleClick(item: number) {
    this.clicked.emit(item);
  }
}
