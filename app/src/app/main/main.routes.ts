import { Routes } from "@angular/router";
import { Index } from ".";
import { Dashboard } from "./dashboard/dashboard";
import { Film } from "./film/film";

export const routes: Routes = [
	{
		path: '',
		component: Index,
		children: [
			{ path: 'dashboard', component: Dashboard },
			{ path: 'film', component: Film}
		]
	}
];