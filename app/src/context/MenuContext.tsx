import React, {createContext, useState} from "react";
import { menuTagList } from "../assets/mock_data/TagData";
import MenuContextInterface from "../interfaces/ParentContext/MenuContext.interface"

export const MenuContext = createContext<MenuContextInterface | undefined>(undefined);

export const MenuContextProvider = (props: any) => {
	const menuTags = menuTagList
	const [selectedMenu, setSelectedMenu] = useState([1, 2, 3])
	const [adding, setAdding] = useState(false)
	const [id, setId] = useState(0);

	const onMenuSelectionUpdateMenuContext = (id: number) => 
	{
		let newArray: number[] = [];
		setId(id);

		if (selectedMenu.includes(id))
		{
			selectedMenu.forEach( menu => {
				if (menu !== id)
					newArray.push(menu)})
			setAdding(false);
		}
		else
		{
			newArray = selectedMenu;
			newArray = [...selectedMenu, id];
			setAdding(true);
		}
		setSelectedMenu(newArray);
	}

		return (
			<MenuContext.Provider
				value={
					{
						currentMenues: 
						{
							selectedMenu,
							menuTags,
						},
						onSelect: {
							handleSelection : onMenuSelectionUpdateMenuContext
						},
						adding: {
							adding, id
						}
					}}
			>
				{props.children}
			</MenuContext.Provider>
		)
}

export default MenuContext