import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private httpClient: HttpClient) { }

  fetch(state: ClrDatagridStateInterface) {
    const { page, filters, sort } = state;

    return this.httpClient.get('/api/inventory/films', {
      params: {
        current: page?.current ?? 0,
        from: page?.from ?? 0,
        to: page?.to ?? 0,
        size: page?.size ?? 10,
        filter: '',
        orderBy: (sort?.by) as string ?? 'film_id',
        orderDir: sort?.reverse ? 'desc' : 'asc'
      }});
  }
}
