import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './index.html',
  styles: ``
})
export class Index {
  users = [
    { id: '35691', name: 'Rhona', creation: '2014-03-27', color: 'Brown'},
    { id: '94227', name: 'Graham', creation: '2021-01-26', color: 'Magenta'}
  ];
}
