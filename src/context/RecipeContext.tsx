import React from "react"

import { RecipeTagInterface } from "../interfaces/Tag/RecipeTag.interface"

export default interface RecipeContextInterface {
	currentRecipes: {
		preSelectedRecipes: number[],//preprocess
		selectedRecipes: number[] | undefined,//preprocess
		recipeTags: RecipeTagInterface[] | undefined,//Pas utilisé
		clearedRecipes?: RecipeTagInterface[] | undefined,
		clearedRecipesNames?: string[],
		maxSelection?: number
	},
	onSelectRecipe: {
		handleSelection?: (id: number) => void,
	}
	//setClearedRecipes: {
	//	setClearedRecipes?: (cleared: RecipeTagInterface[]) => void
	//}
}

export const RecipeContext = React.createContext<RecipeContextInterface | undefined>(undefined)
