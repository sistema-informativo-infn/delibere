import { Component } from '@angular/core';

import { Delibera, DeliberaFilter } from '@core/models';
import { DeliberaService } from '@core/services/delibera.service';
import { TableField } from '@ui/table/table.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  deliberaFilters: DeliberaFilter = {};

  constructor(
    private readonly deliberaService: DeliberaService,
  ) {
  }

  deliberaFields: Array<TableField<Delibera>> = [
    {
      header: 'Tipo',
      context: (delibera) => delibera.tipo,
      key: 'tipo',
    },
    {
      header: 'Numero',
      context: (delibera) => delibera.numero,
      key: 'numero',
    },
    {
      header: 'Data',
      context: (delibera) => delibera.data,
      key: 'data',
    },
    {
      header: 'Oggetto',
      context: (delibera) => delibera.oggetto,
      key: 'oggetto',
    },
    // TODO: Add urlPdf
  ];

  deliberaPager = (filters: DeliberaFilter) => this.deliberaService.getDelibere(filters);

  deliberaFiltersChange(filters: DeliberaFilter) {
    this.deliberaFilters = filters;
  }
}
