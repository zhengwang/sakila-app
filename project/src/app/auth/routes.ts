import { Routes } from "@angular/router";
import { Login } from "./login";
import { Signup } from "./signup";
import { Index } from ".";

export const routes: Routes = [
	{
		path: '',
		component: Index,
		children: [
			{ path: '', component: Login },
			{ path: 'signup', component: Signup }
		]
	}
];