import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/_services/spinner.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  constructor(public spinnerService: SpinnerService) {}
}
