import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';



@NgModule({
  imports: [
      MatToolbarModule,
      MatButtonModule,
      MatInputModule,
      MatIconModule,
      MatMenuModule,
      MatCardModule,
      MatGridListModule,
      MatListModule,
      MatDividerModule,
      MatFormFieldModule,
      MatSidenavModule,
      MatDialogModule,
      MatSortModule,
      MatTableModule,
      MatPaginatorModule,
      MatSnackBarModule,
      CommonModule,
      MatSelectModule,
      MatAutocompleteModule
  ],
  exports: [
      MatToolbarModule,
      MatButtonModule,
      MatInputModule,
      MatIconModule,
      MatMenuModule,
      MatCardModule,
      MatGridListModule,
      MatListModule,
      MatDividerModule,
      MatFormFieldModule,
      MatDialogModule,
      MatSidenavModule,
      MatSortModule,
      MatTableModule,
      MatPaginatorModule,
      MatSnackBarModule,
      CommonModule,
      MatSelectModule,
      MatAutocompleteModule
  ]
})
export class MaterialModule { }

