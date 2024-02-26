import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./auth/index.module').then(m => m.IndexModule)
	}
];
