import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import '@cds/core/button/register.js';
import { ClarityIcons, cogIcon, detailCollapseIcon, detailExpandIcon, filmStripIcon, homeIcon, stepForward2Icon, storeIcon, userIcon, usersIcon, vmBugIcon } from '@cds/core/icon';
import '@cds/core/icon/register.js';
import { ClarityModule } from '@clr/angular';
import { LoginGuard } from '../guard/login.guard';
import { FilmService } from '../service/film.service';
import { TokenInterceptor } from '../service/token.interceptor';
import { Customer } from './customer';
import { Index } from './index';
import { Layout } from './layout';
import { routes } from './routes';
import { Sidebar } from './sidebar';
import { Store } from './store';
import { EditableText } from '../shared/editable-text';

ClarityIcons.addIcons(vmBugIcon);
ClarityIcons.addIcons(cogIcon);
ClarityIcons.addIcons(userIcon);
ClarityIcons.addIcons(filmStripIcon);
ClarityIcons.addIcons(storeIcon);
ClarityIcons.addIcons(usersIcon);
ClarityIcons.addIcons(homeIcon);
ClarityIcons.addIcons(stepForward2Icon);
ClarityIcons.addIcons(detailExpandIcon);
ClarityIcons.addIcons(detailCollapseIcon);



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
    ClarityModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    EditableText
  ],
  providers: [
    { provide: FilmService },
    { provide: LoginGuard},
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class MainModule { }
