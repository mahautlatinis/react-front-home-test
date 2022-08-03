import React, { useContext} from "react";
import {TagInterface} from "../interfaces/Tag/Tag.interface";
import {TagCategoryInterface} from "../interfaces/Tag/TagCategory.interface";
import { menuTagList} from "../assets/mock_data/TagData";

//TODO: a remettre avec les autres interfaces
export default interface RecipeContextInterface {
	selectedMenu: number[],
	menuTags: TagCategoryInterface[],
	maxSelection: number,
	onSelectMenutag?: () => {

	}
}

export const RecipeContext = React.createContext<RecipeContextInterface | undefined>(undefined)
