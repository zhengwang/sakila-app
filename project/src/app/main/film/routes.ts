import { Routes } from "@angular/router";
import { Film } from "./film";
import { Details } from "./details";

export const routes: Routes = [
	{
		path: '',
		component: Film
	},
	{
		path: 'detail/:film_id',
		component: Details
	}
];