import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, AbstractControl } from '@angular/forms';

import { DeliberaFilter } from '@core/models';
import { combineLatest } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-delibera-filters',
  templateUrl: './delibera-filters.component.html',
  styleUrls: ['./delibera-filters.component.scss'],
})
export class DeliberaFiltersComponent implements AfterViewInit, OnInit {

  @Input() filters: DeliberaFilter = {};

  @Output() readonly filterChange = new EventEmitter<DeliberaFilter>();

  filterForm?: FormGroup;
  qInput?: AbstractControl;
  typeInput?: AbstractControl;

  readonly types = [
    { value: 'CD', label: 'Consiglio Direttivo' },
    { value: 'GE', label: 'Giunta Esecutiva' },
  ];

  constructor(
    private readonly formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    const groups: Record<keyof DeliberaFilter, FormControl> = {
      q: new FormControl(),
      tipo: new FormControl(this.filters.tipo),
    };

    this.filterForm = this.formBuilder.group(groups);

    const qInput = this.filterForm && this.filterForm.get('q');
    const typeInput = this.filterForm.get('tipo');

    if (!qInput || !typeInput) {
      return;
    }

    this.qInput = qInput;
    this.typeInput = typeInput;

    // FIXME: Prima modifica
    combineLatest(
      qInput.valueChanges.pipe(
        debounceTime(1000),
      ),
      typeInput.valueChanges,
    ).subscribe(([q, type]) => {
      this.filterChange.emit({ q, tipo: type });
    });

  }

  ngAfterViewInit() {
    if (this.qInput && this.typeInput) {
      this.qInput.setValue(this.filters.q || '');
      this.typeInput.setValue(this.filters.tipo || '');
    }
  }

}
