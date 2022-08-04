import { RecipeTagInterface } from "./RecipeTag.interface";

export interface MenuTagInterface {
	id: number;
	name: string,
	tags: RecipeTagInterface[],//Va permettre d'afficher la liste de menuTag	
	//dependentRecipes?: RecipeTagInterface[]//Va permettre d'afficher les recettes dépendantes des menus
	onSelect?: (...args: any) => void,
	isSelected?: boolean,
	tagType?: string
};
