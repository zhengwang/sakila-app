import { Routes } from "@angular/router";
import { Index } from ".";
import { Dashboard } from "./dashboard";

export const routes: Routes = [
	{
		path: '',
		component: Index,
		children: [
			{ path: 'dashboard', component: Dashboard }
		]
	}
];