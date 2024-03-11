import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../service/film.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IFilmDetail } from '../dto/ifilmdetail';

@Component({
  selector: 'app-details',
  template: `
  <div class="clr-row">
    <button class="btn btn-primary btn-icon"
    (click)="onClickBack()">
      <cds-icon shape="detail-collapse"/>
    </button>
    <p cds-text="subsction semibold" class="film-title">{{ title }}</p>
  </div>
  <div class="clr-row">
    <div class="clr-col-lg-6 clr-col-12">
      <div class="card">
        <h5 class="card-header">Description</h5>
        <div class="card-block">
          <div class="card-text">
            {{ description }}
          </div>
          <EditableText />
        </div>
      </div>
    </div>
  </div>
  `,
  styles: `.film-title {align-self: center}`
})
export class Details implements OnInit {
  film_id: any;
  title: string;
  description: string;

  constructor(
    private filmSvc: FilmService,
    route: ActivatedRoute,
    private router: Router) {
    this.film_id = route.snapshot.paramMap.get('film_id');
  }

  ngOnInit(): void {
    this.filmSvc.fetchFilmDetail(this.film_id).subscribe(response => {
      console.log(response);
      const { status, data } = <{ status: string, data: IFilmDetail }>response;
      if (status == 'ok') {
        const { title, description } = data;
        this.title = title;
        this.description = description;
      }
    });
  }

  onClickBack() {
    this.router.navigate(['/main/film']);
  }
}
