import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Delibera } from '@core/models';

@Injectable()
export class DeliberaService {

  constructor(
    @Inject('API_URL') private readonly apiUrl: string,
    @Inject('DELIBERE_URL') private readonly deliberApiUrl: string,
    private readonly http: HttpClient,
  ) {
  }

  getDelibere() {
    return this.http.get<Delibera[]>(`${this.apiUrl}${this.deliberApiUrl}`);
  }
}
