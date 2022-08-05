import React from "react"

import { RecipeTagInterface } from "../interfaces/Tag/RecipeTag.interface"
import { RecipeItemInterface } from "../interfaces/Recipe/Recipe.interface"
import { MenuTagInterface} from "../interfaces/Tag/MenuTag.interface"

export default interface RecipeContextInterface {
	currentRecipes: {
		recipeTags: RecipeTagInterface[] | undefined,
		selectedRecipes?: number[],//on va identifier les éléments séléctionnés via leur id
	},
	onSelectRecipe: {
		handleSelection?: (id: number) => void,
	},
	getRecipesToDisplay: {
		getRecipesToDisplay?: () => RecipeItemInterface[]
	}
	getSelectedMenuTags: {
		getSelectedMenuTags?: () => MenuTagInterface[]
	},
	getSelectedRecipesTags:  {
		getSelectedRecipesTags?: () => RecipeTagInterface[]
	}
}

export const RecipeContext = React.createContext<RecipeContextInterface | undefined>(undefined)
