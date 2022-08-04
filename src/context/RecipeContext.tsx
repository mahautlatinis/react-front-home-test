import React from "react"

import { RecipeTagInterface } from "../interfaces/Tag/RecipeTag.interface"

export default interface RecipeContextInterface {
	currentRecipes: {
		selectedRecipes: number[],
		recipeTags?: RecipeTagInterface[],
		maxSelection?: number
	},
	onSelectRecipe: {
		handleSelection : (id: number) => void
	}
}

export const RecipeContext = React.createContext<RecipeContextInterface | undefined>(undefined)
