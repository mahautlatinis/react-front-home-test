export interface IngredientItemProps {
	name: string;
	names: string;
	imgURL: string;
	type: string;
	unit: string;
	prefix: string;
}

export interface IngredientsProps {
	list:  IngredientItemProps[],
}
