import { Component, OnInit } from '@angular/core';

import { Delibera } from '@core/models';
import { DeliberaService } from '@core/services/delibera.service';
import { TableField } from '@ui/table/table.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

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

  deliberaPager = () => this.deliberaService.getDelibere();

  ngOnInit() {
  }

}
