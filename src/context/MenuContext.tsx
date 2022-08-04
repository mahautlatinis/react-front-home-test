import React, { useContext} from "react";
import {RecipeTagInterface} from "../interfaces/Tag/RecipeTag.interface";
import {MenuTagInterface} from "../interfaces/Tag/MenuTag.interface";
import { menuTagList} from "../assets/mock_data/TagData";

export default interface MenuContextInterface {
	currentMenues: {
		selectedMenu?: number[],
		menuTags?: MenuTagInterface[],
		maxSelection?: number
	},
	onSelect: {
		handleSelection: (id: number) => void 
	}
}

export const MenuContext = React.createContext<MenuContextInterface | undefined>(undefined)
