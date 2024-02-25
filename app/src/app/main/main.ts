import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClrAlertModule, ClrDatagridModule, ClrDatagridStateInterface } from '@clr/angular';
import { SharedModule } from '../shared/shared.module';
import { IFilm } from '../dto/ifilm';
import { FilmService } from '../service/film.service';

@Component({
  selector: 'app-main',
  standalone: true,
  providers: [FilmService],
  imports: [SharedModule, ClrAlertModule, ClrDatagridModule, CommonModule],
  templateUrl: './main.html',
  styles: ``
})
export class Main implements OnInit {
  alertType = 'danger';
  alertText = 'Hello world';

  loading: boolean = false;
  total: number = 0;
  films: IFilm[] = [];

  constructor(private httpClient: HttpClient, private filmSvc: FilmService) { }

  ngOnInit(): void {
    this.httpClient.get<any>('/sanctum/csrf-cookie').subscribe(x => console.log(x));
  }

  refresh(state: ClrDatagridStateInterface<IFilm>) {
    const { page, filters, sort } = state;

    let _filters: string = '';
    if (filters) {
      for (let filter of filters) {
        let { property, value } = <{ property: string, value: string }>filter;
        _filters = `${_filters}&${property}=${value}`;
      }
    }
    // this.httpClient.get('/api/inventory/films', {
    //   params: {
    //     current: page?.current ?? 0,
    //     from: page?.from ?? 0,
    //     to: page?.to ?? 0,
    //     size: page?.size ?? 10,
    //     filter: _filters,
    //     orderBy: (sort?.by) as string ?? 'film_id',
    //     orderDir: sort?.reverse ? 'desc' : 'asc'
    //   }
    // }).subscribe(response => {
    //   const { status, data: { data, total } } = <{ status: string, data: any }>response;
    //   console.log(data);
    //   if (status == 'ok') {
    //     this.films = data;
    //     this.total = total;
    //   }
    // });
    this.filmSvc.fetchFilms(state).subscribe(response => {
      const { status, data: {data, total}} = <{status: string, data: any}> response;
      if (status == 'ok') {
        this.films = data;
        this.total = total;
      }
    });
  }
}

