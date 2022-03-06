import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';
import { CardComponent } from './card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    DropdownComponent,
    InputComponent,
    ModalComponent,
    CardComponent,
    PaginationComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    DropdownComponent,
    InputComponent,
    ModalComponent,
    CardComponent,
    PaginationComponent,
  ],
})
export class SharedModule {}
