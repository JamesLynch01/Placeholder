import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';



@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
  exports: [
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatButtonToggleModule,
  ]
})
export class MaterialModule { }
