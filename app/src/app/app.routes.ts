import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
	{ path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) }
];
