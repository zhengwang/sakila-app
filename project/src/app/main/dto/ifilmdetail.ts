import { IActor } from "./iactor";
import { ICategory } from "./icategory";
import { Ilanguage } from "./ilanguage";

export interface IFilmDetail {
	film_id: number;
	title: string;
	description: string;
	rating: string;
	length: number;
	original_language: string|null;
	original_language_id: number|null;
	release_year: string|null;
	rental_duration: number;
	rental_rate: string|null;
	replacement_cost: string|null;
	special_features: string|null;
	
	actor: Array<IActor>;
	categories: Array<ICategory>;
	language: Ilanguage;
}