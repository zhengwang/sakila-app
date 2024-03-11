import { Component, OnInit } from '@angular/core';
import { ClrDatagridStateInterface } from '@clr/angular';
import { IFilm } from '../dto/ifilm';
import { FilmService } from '../../service/film.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-film',
  template: `
    <div class="dt-height clr-row">
      <div class="clr-col-12">
        <div class="card">
          <h3 class="card-header">Film inventory</h3>
          <div class="card-block">
            <clr-datagrid (clrDgRefresh)="refresh($event)" [clrDgLoading]="loading" class="dt-height">
            <clr-dg-column>Title</clr-dg-column>
            <clr-dg-column [style.min-style.px]="100" [style.width.px]="100">Year</clr-dg-column>
            <clr-dg-column [style.min-style.px]="100" [style.width.px]="100">Language</clr-dg-column>
            <clr-dg-column [style.min-style.px]="150" [style.width.px]="150">Categories</clr-dg-column>
            <clr-dg-column [style.min-width.px]="60" [style.width.px]="60"></clr-dg-column>

            <clr-dg-row *ngFor="let film of films">
              <clr-dg-cell>
                <div class="content">
                {{film.title}}
                </div>
              </clr-dg-cell>
              <clr-dg-cell [style.min-style.px]="100" [style.width.px]="100">
                <div class="content">
                  {{film.release_year}}
                </div>
              </clr-dg-cell>
              <clr-dg-cell [style.min-style.px]="100" [style.width.px]="100">
                <div class="content">
                  {{ film.language }}
                </div>
              </clr-dg-cell>
              <clr-dg-cell [style.min-style.px]="150" [style.width.px]="150">
                <div class="content">
                  {{ film.categories }}
                </div>
              </clr-dg-cell>
              <clr-dg-cell [style.min-width.px]="60" [style.width.px]="60">
                <div class="btn-group btn-primary btn-icon">
                  <button class="btn btn-sm" (click)="onSelectFilm(film.film_id)">
                    <cds-icon shape="detail-expand"/>
                    <span class="clr-icon-title">Home</span>
                  </button>
                </div>
              </clr-dg-cell>
              <clr-dg-row-detail *clrIfExpanded class="cell">
                <span><b>Description</b> {{ film.description }}</span>
              </clr-dg-row-detail>
              <clr-dg-row-detail *clrIfExpanded class="cell">
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
    </div>
  </div>
  `,
  styles: `.dt-height clr-datagrid {height: fit-content !important;font-size:10px;width: 100%} .btn-sm {width: 26px !important; height: 26px !important} .content{display: inline-flex; height: 100%;align-items: center}`
})
export class Film implements OnInit {
  loading: boolean = true;
  films: IFilm[];
  total: number;

  constructor(
    private filmSvc: FilmService,
    private _router: Router,
    private route: ActivatedRoute
  ) { }

  refresh(state: ClrDatagridStateInterface) {
    let filters: { [prop: string]: any[] } = {};

    this.filmSvc.fetchAllFilms(state).subscribe(response => {
      const { status } = <{ status: string, data: any }>response;
      if (status == 'ok') {
        const { data, total } = (response as any).data;
        this.films = data;
        this.total = total;
        this.loading = false;
      }
    });
  }

  onSelectFilm(film_id) {
    this._router.navigate(['/main/film/detail', film_id]);
  }

  ngOnInit(): void { }
}
