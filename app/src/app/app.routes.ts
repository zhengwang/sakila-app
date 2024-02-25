import { Routes } from '@angular/router';
import { Index as Dashboard } from './dashboard/index/index';
import { Main } from './main/main';
import { Login } from './login';

export const routes: Routes = [
	{
		path: '',
		component: Login
	},
	{
		path: 'auth',
		loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
	},
	// { path: 'main', component: Main },
	// { path: 'dashboard', component: Dashboard }
];
