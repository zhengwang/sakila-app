import { Component } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { IFilm } from './dto/ifilm';
import { FilmService } from '../service/film.service';

@Component({
  selector: 'app-film',
  template: `
    <clr-datagrid (clrDgRefresh)="refresh($event)" [clrDgLoading]="loading">
      <clr-dg-column [clrDgField]="'film_id'">Film ID</clr-dg-column>
      <clr-dg-column [clrDgField]="'title'">Title</clr-dg-column>
      <clr-dg-column [clrDgField]="'description'">Description</clr-dg-column>
      <clr-dg-column [clrDgField]="'release_year'">Release year</clr-dg-column>
      <clr-dg-row *ngFor="let film of films">
        <clr-dg-cell>{{film.film_id}}</clr-dg-cell>
        <clr-dg-cell>{{film.title}}</clr-dg-cell>
        <clr-dg-cell>{{film.description}}</clr-dg-cell>
        <clr-dg-cell>{{film.release_year}}</clr-dg-cell>
      </clr-dg-row>

      <clr-dg-footer>
        {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}}
        of {{total}} films
        <clr-dg-pagination #pagination [clrDgTotalItems]="total"></clr-dg-pagination>
    </clr-dg-footer>
    </clr-datagrid>
  `,
  styles: ``
})
export class Film {
  loading = false;
  films: IFilm[];
  total: number;

  constructor(private filmSvc: FilmService) { }

  refresh(state: ClrDatagridStateInterface) {
    this.loading = true;
    let filters: { [prop: string]: any[] } = {};

    this.filmSvc.fetch(state).subscribe(response => {
      console.log(response);
      const { status } = <{ status: string, data: any }>response;
      if (status == 'ok') {
        const { data, total } = (response as any).data;
        this.films = data;
        this.total = total;
        this.loading = false;
      }
    });
  }
}
