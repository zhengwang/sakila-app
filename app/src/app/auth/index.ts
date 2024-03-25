import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  template: `
    <mat-grid-list cols="3" rowHeight="1:1" gutterSize="0">
      <mat-grid-tile class="bg-sky-400 h-screen flex">
        <router-outlet></router-outlet>
      </mat-grid-tile>
      <mat-grid-tile colspan="2" class="h-screen bg-cover bg-center bg-splash-texture"></mat-grid-tile>
    </mat-grid-list>
  `,
  styles: ``
})
export class Index {

}
