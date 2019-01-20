import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
} from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [MatCardModule, MatButtonModule, MatInputModule, MatIconModule],
})
export class MaterialModule {}
