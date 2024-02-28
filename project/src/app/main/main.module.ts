import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClarityIcons, cogIcon, filmStripIcon, storeIcon, userIcon, usersIcon, vmBugIcon } from '@cds/core/icon';
import '@cds/core/icon/register.js';
import { Index } from './index';
import { Layout } from './layout';
import { routes } from './routes';
import { ClarityModule } from '@clr/angular';
import { Sidebar } from './sidebar';
import { Film } from './film';
import { Store } from './store';
import { Customer } from './customer';
import { FilmService } from '../service/film.service';
import { HttpClientModule } from '@angular/common/http';
ClarityIcons.addIcons(vmBugIcon);
ClarityIcons.addIcons(cogIcon);
ClarityIcons.addIcons(userIcon);
ClarityIcons.addIcons(filmStripIcon);
ClarityIcons.addIcons(storeIcon);
ClarityIcons.addIcons(usersIcon);


@NgModule({
  declarations: [
    Index,
    Layout,
    Sidebar,
    Film,
    Store,
    Customer,
  ],
  imports: [
    CommonModule,
    ClarityModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    { provide: FilmService }
  ]
})
export class MainModule { }
