import { Routes } from '@angular/router';
import { Index as Dashboard } from './dashboard/index/index';
import { Main } from './main/main';

export const routes: Routes = [
	{ path: '', component: Main },
	{ path: 'dashboard', component: Dashboard }
];
