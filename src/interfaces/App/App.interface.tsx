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
		recipeTags: RecipeTagInterface[]
		maxSelection?: number
    }
    //onSelectRecipes: {
	//	handleSelection?: (id: number) => void
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
		maxSelection: 8
	}
    //onSelectRecipes: {
	//	handleSelection: undefined 
    //}
}
