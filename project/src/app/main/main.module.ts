import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import '@cds/core/button/register.js';
import { ClarityIcons, cogIcon, filmStripIcon, homeIcon, stepForward2Icon, storeIcon, userIcon, usersIcon, vmBugIcon } from '@cds/core/icon';
import '@cds/core/icon/register.js';
import { ClarityModule, ClrButtonModule, ClrDatagridModule, ClrIconModule, ClrVerticalNavModule } from '@clr/angular';
import { LoginGuard } from '../guard/login.guard';
import { FilmService } from '../service/film.service';
import { TokenInterceptor } from '../service/token.interceptor';
import { Customer } from './customer';
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
ClarityIcons.addIcons(homeIcon);
ClarityIcons.addIcons(stepForward2Icon);



@NgModule({
  declarations: [
    Index,
    Layout,
    Sidebar,
    Store,
    Customer,
  ],
  imports: [
    CommonModule,
    ClrVerticalNavModule,
    ClrButtonModule,
    ClrDatagridModule,
    ClrIconModule,
    ClarityModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    { provide: FilmService },
    { provide: LoginGuard},
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class MainModule { }
