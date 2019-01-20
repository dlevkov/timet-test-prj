import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
} from '@angular/material';
@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatInputModule],
  exports: [MatCardModule, MatButtonModule, MatInputModule],
})
export class MaterialModule {}
