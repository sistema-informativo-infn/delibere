import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DeliberaFiltersComponent } from '@shared/components/delibera-filters/delibera-filters.component';

const COMPONENTS = [
  DeliberaFiltersComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...COMPONENTS,
  ],
})
export class SharedModule { }
