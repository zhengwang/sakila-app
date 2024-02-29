import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClarityIcons, cogIcon, filmStripIcon, storeIcon, userIcon, usersIcon, vmBugIcon } from '@cds/core/icon';
import '@cds/core/icon/register.js';
import { ClarityModule, ClrDatagridModule, ClrIconModule, ClrVerticalNavModule } from '@clr/angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FilmService } from '../service/film.service';
import { Customer } from './customer';
import { Film } from './film';
import { Index } from './index';
import { Layout } from './layout';
import { routes } from './routes';
import { Sidebar } from './sidebar';
import { Store } from './store';
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
    ClrVerticalNavModule,
    ClrDatagridModule,
    ClrIconModule,
    ClarityModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    { provide: FilmService }
  ]
})
export class MainModule { }
