import React from "react"

import { RecipeTagInterface } from "../interfaces/Tag/RecipeTag.interface"

export default interface RecipeContextInterface {
	currentRecipes: {
		preSelectedRecipes: number[],
		selectedRecipes: number[] | undefined,
		recipeTags: RecipeTagInterface[] | undefined,
		maxSelection?: number
	},
	onSelectRecipe: {
		handleSelection? : (id: number) => void
	}
}

export const RecipeContext = React.createContext<RecipeContextInterface | undefined>(undefined)
