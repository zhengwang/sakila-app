import { Routes } from "@angular/router";
import { Index } from ".";
import { Customer } from "./customer";
import { Film } from "./film";
import { Store } from "./store";

export const routes: Routes = [
	{
		path: '',
		component: Index,
		children: [
			{ path: 'film', component: Film },
			{ path: 'store', component: Store },
			{ path: 'customer', component: Customer}
		]
	}
];