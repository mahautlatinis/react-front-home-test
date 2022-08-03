import React, { useContext} from "react";
import {TagInterface} from "../interfaces/Tag/Tag.interface";
import {TagCategoryInterface} from "../interfaces/Tag/TagCategory.interface";
import { menuTagList} from "../assets/mock_data/TagData";

//TODO: a remettre avec les autres interfaces
export default interface RecipeContextInterface {
  //setState(arg0: { selectedMenu: number[]; });
	currentRecipes: {
		selectedMenu: number[],
		menuTags?: TagCategoryInterface[],
		maxSelection?: number
	},
	onSelect: {
		handleSelection: (...args: any) => void 
	}
}

export const RecipeContext = React.createContext<RecipeContextInterface | undefined>(undefined)
