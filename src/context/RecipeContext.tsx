import React from "react"

import { RecipeTagInterface } from "../interfaces/Tag/RecipeTag.interface"

export default interface RecipeContextInterface {
	currentRecipes: {
		recipeTags: RecipeTagInterface[] | undefined,
		selectedRecipes?: number[],//on va identifier les éléments séléctionnés via leur id
	},
	onSelectRecipe: {
		handleSelection?: (id: number) => void,
	}
}

export const RecipeContext = React.createContext<RecipeContextInterface | undefined>(undefined)
