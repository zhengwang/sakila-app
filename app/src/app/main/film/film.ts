import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'Film',
  templateUrl: './film.html',
  styleUrl: './film.css'
})
export class Film implements AfterViewInit {
  currentDate = new Date();
  @ViewChild('ref_tbl') ref_tbl: ElementRef;
  $ = (window as any).$;

  ngAfterViewInit(): void {
    this.$(this.ref_tbl.nativeElement).DataTable();
  }
}
