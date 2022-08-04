import { MenuTagInterface } from "../Tag/MenuTag.interface"
import { RecipeTagInterface } from "../Tag/RecipeTag.interface"
import { menuTagList } from "../../assets/mock_data/TagData"

//TODO: a renommer
export interface AppState  {
    currentMenues: {
		selectedMenu: number[],
		menuTags: MenuTagInterface[],
		maxSelection: number
    }
    onSelect: {
	handleSelection?: (id: number) => void
    }
    currentRecipes: {
		preSelectedRecipes: any
		selectedRecipes: number[],
		recipeTags: RecipeTagInterface[],
		clearedRecipes?: RecipeTagInterface[],
		clearedRecipesNames: string[],
		maxSelection?: number
    }
    onSelectRecipe: {
		handleSelection?: (id: number) => void
    }
	//,setClearedRecipes: {
	//	setClearedRecipes?: (cleared: RecipeTagInterface[], clearedNames: string[]) => void
	//}
}

export const appStateInitializer = {
	currentMenues: {
        selectedMenu: [0],
        menuTags: menuTagList,
        maxSelection: 3
    },
    onSelect: {
        handleSelection: undefined
	},
	currentRecipes: {
		preSelectedRecipes: [0],
		selectedRecipes: [0],
		recipeTags: [],
		clearedRecipes: [],
		clearedRecipesNames: [""],
		maxSelection: 8
	},
    onSelectRecipe: {
		handleSelection: undefined 
    }
}
