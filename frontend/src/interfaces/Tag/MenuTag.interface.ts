import { RecipeTagInterface } from "./RecipeTag.interface";

export interface MenuTagInterface {
	id: number;
	name: string,
	tags?: RecipeTagInterface[],
	tagType?: string
};
