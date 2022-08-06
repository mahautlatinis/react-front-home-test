import React from "react";
import {MenuTagInterface} from "../interfaces/Tag/MenuTag.interface";

export default interface MenuContextInterface {
	currentMenues: {
		selectedMenu?: number[],
		menuTags?: MenuTagInterface[],
		maxSelection?: number
	},
	onSelect: {
		handleSelection: (id: number) => void 
	},
	getClassName: {
		getClassName: (id: number, tagType: string) => boolean
	}
}

export const MenuContext = React.createContext<MenuContextInterface | undefined>(undefined)
