import { RecipeTagInterface } from "./RecipeTag.interface";

export interface MenuTagInterface {
	id: number;
	name: string,
	tags: RecipeTagInterface[],
	onSelect?: (...args: any) => void,
	//isSelected?: boolean,
	tagType?: string
};
