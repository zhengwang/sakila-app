import { Routes } from "@angular/router";
import { Login } from "./login/login";
import { Register } from "./register/register";
import { Index } from ".";

export const routes: Routes = [
	{
		path: '', component: Index, children: [
			{ path: '', component: Login },
			{ path: 'register', component: Register }
		]
	},

];