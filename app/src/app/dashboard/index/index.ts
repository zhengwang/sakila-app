import { Component } from '@angular/core';
import { IUser } from '../../dto/user';
import { ClrDatagridComparatorInterface } from '@clr/angular';

class NameComparator implements ClrDatagridComparatorInterface<IUser>{
  compare(a: IUser, b: IUser): number {
    return a.name > b.name ? 1 : -1;
  }
}

@Component({
  selector: 'dashboard',
  templateUrl: './index.html',
  styles: ``
})
export class Index {
  users: IUser[] = [
    { id: '35691', name: 'Rhona', creation: '2014-03-27', color: 'Brown'},
    { id: '94227', name: 'Graham', creation: '2021-01-26', color: 'Magenta'},
    { id: '10873', name: 'Sibyl', creation: '2017-08-24', color: 'Pink'},
    { id: '49993', name: 'Lenny', creation: '2022-12-26', color: 'Blue'},
    { id: '2112', name: 'Darla', creation: '2021-08-10', color: 'Pink'},
    { id: '41947', name: 'Lucius', creation: '2024-01-24', color: 'Blue'},
    { id: '75935', name: 'Nidia', creation: '2022-07-10', color: 'Violet'},
    { id: '25125', name: 'Georgia', creation: '2015-11-09', color: 'Violet'},
    { id: '8845', name: 'Bverly', creation: '2014-06-29', color: 'Cyan'},
    { id: '3889', name: 'Genoveva', creation: '2015-04-16', color: 'White'}
  ];

  public nameComparator = new NameComparator();
}
