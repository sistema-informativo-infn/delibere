import { GtConfig, GtConfigField, GtConfigSetting } from '@angular-generic-table/core';
import { Component, Input, OnInit } from '@angular/core';

import { BehaviorSubject, NEVER, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

// Public API
export interface TableField<T> {
  header: string;
  key: string;
  context?: (value: T) => any;
}

export interface TableColumn<T = string> {
  key: T;
}

// Angular Generic Table
const EMPTY_TABLE_SOURCE: GtConfig<any> = { settings: [], fields: [], data: [] };

function transformFields(fields: Array<TableField<any>>) {
  return fields.map((field) => {
    const f: GtConfigField<any, any> = {
      objectKey: field.key,
      name: field.header,
      render: field.context,
      value: () => undefined,
    };
    return f;
  });
}

function transformColumnSettings(settings: Array<TableColumn<any>>) {
  return settings.map((setting) => {
    const s: GtConfigSetting = {
      objectKey: setting.key,
    };
    return s;
  });
}

function getSimpleColumnSettings(fields: Array<TableColumn<any>>) {
  return fields.map((f) => ({ objectKey: f.key }));
}

type GenericFilter = Record<string, any>;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> implements OnInit {

  private _filters$ = new BehaviorSubject<GenericFilter>({});
  @Input() set filters(value: GenericFilter) {
    this._filters$.next(value);
  }

  @Input() fields?: Array<TableField<T>>;
  @Input() columnSettings?: Array<TableColumn<T>>;

  @Input() pager: (filters: GenericFilter) => Observable<T[]> = (() => NEVER);

  source$: Observable<GtConfig<T>> = of(EMPTY_TABLE_SOURCE);

  constructor() {
  }

  ngOnInit() {
    this.source$ = this._filters$.pipe(
      switchMap((filters) => this.pager(filters)),
    ).pipe(
      map((data) => {
        const fields = transformFields(this.fields || []);
        const source: GtConfig<T> = {
          data,
          fields,
          settings: this.columnSettings
            ? transformColumnSettings(this.columnSettings)
            : getSimpleColumnSettings(this.fields || []),
        };
        return source;
      }),
    );
  }

}
