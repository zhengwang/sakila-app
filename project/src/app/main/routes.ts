import { Routes } from "@angular/router";
import { Index } from ".";
import { LoginGuard } from "../guard/login.guard";
import { Customer } from "./customer";
import { Store } from "./store";

export const routes: Routes = [
	{
		path: '',
		component: Index,
		children: [
			{
				path: 'film',
				loadChildren: () => import('./film/film.module').then(m => m.FilmModule)
			},
			{ path: 'store', component: Store },
			{ path: 'customer', component: Customer }
		],
		canActivateChild: [LoginGuard]
	}
];