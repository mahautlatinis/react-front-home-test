import { RecipeTagInterface } from "../Tag/RecipeTag.interface"
import { MenuTagInterface } from "../Tag/MenuTag.interface"
import { RecipeItemInterface } from "../Recipe/Recipe.interface"

export default interface RecipeContextInterface {
	currentRecipes: {
		recipeTags: RecipeTagInterface[] | undefined,
		selectedRecipes?: number[],
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
	},
	getClassName: {
		getClassName?: (id: number, tagType: string) => boolean | undefined
	}
}
