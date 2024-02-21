import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ClrAlertModule, ClrDatagridModule } from '@clr/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SharedModule, ClrAlertModule, ClrDatagridModule, CommonModule],
  templateUrl: './main.html',
  styles: ``
})
export class Main {
  alertType = 'danger';
  alertText = 'Hello world';

  users = [
    { id: '35691', name: 'Rhona', creation: '2014-03-27', color: 'Brown'},
    { id: '94227', name: 'Graham', creation: '2021-01-26', color: 'Magenta'}
  ];
}
