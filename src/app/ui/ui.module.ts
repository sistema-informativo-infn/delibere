import { GenericTableModule } from '@angular-generic-table/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TableComponent } from '@ui/table/table.component';

const COMPONENTS = [
  TableComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    GenericTableModule,
  ],
  exports: [
    ...COMPONENTS,
  ],
})
export class UiModule { }
