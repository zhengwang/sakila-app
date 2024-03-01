import { Component } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { IFilm } from './dto/ifilm';
import { FilmService } from '../service/film.service';

@Component({
  selector: 'app-film',
  template: `
    <div class="dt-height clr-row">
      <div class="clr-col-7">
        <clr-datagrid (clrDgRefresh)="refresh($event)" [clrDgLoading]="loading" class="dt-height">
        <clr-dg-column [clrDgField]="'film_id'">Film ID</clr-dg-column>
        <clr-dg-column [clrDgField]="'title'">Title</clr-dg-column>
        <clr-dg-column [clrDgField]="'release_year'">Release year</clr-dg-column>
        <clr-dg-column [clrDgField]="'language'">Language</clr-dg-column>
        <clr-dg-row *ngFor="let film of films">
          <clr-dg-cell>{{film.film_id}}</clr-dg-cell>
          <clr-dg-cell>{{film.title}}</clr-dg-cell>
          <clr-dg-cell>{{film.release_year}}</clr-dg-cell>
          <clr-dg-cell>{{ film.language }}</clr-dg-cell>
          <clr-dg-row-detail *clrIfExpanded>
            <span><b>Description</b> {{ film.description }}</span>
          </clr-dg-row-detail>
          <clr-dg-row-detail *clrIfExpanded>
            <span><b>Actors</b> {{ film.actors }}</span>
          </clr-dg-row-detail>
        </clr-dg-row>

        <clr-dg-footer>
          <clr-dg-pagination #pagination [clrDgTotalItems]="total">
          <clr-dg-page-size [clrPageSizeOptions]="[10, 20, 50, 100]">
            Films per page
          </clr-dg-page-size>
          {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}}
          of {{total}} films
        </clr-dg-pagination>
      </clr-dg-footer>
      </clr-datagrid>
    </div>
  </div>
  `,
  styles: `.width {width: 12% !important;text-align: center} .cell {font-size: 12px; text-align: left;} .dt-height clr-datagrid {height: fit-content !important} .year {width: 13%; text-wrap: nowrap} .language{ width: 13%}`
})
export class Film {
  loading: boolean = true;
  films: IFilm[];
  total: number;

  constructor(private filmSvc: FilmService) { }

  refresh(state: ClrDatagridStateInterface) {
    let filters: { [prop: string]: any[] } = {};

    this.filmSvc.fetch(state).subscribe(response => {
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
