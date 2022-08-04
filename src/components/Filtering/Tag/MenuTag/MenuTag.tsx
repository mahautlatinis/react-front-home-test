import { useState, useContext, useEffect } from "react"
import { MenuContext } from "../../../../context/MenuContext";
import { MenuTagInterface } from "../../../../interfaces/Tag/MenuTag.interface"
import TagItem from "../../../Displaying/Tag/TagItem/TagItem"
import "./style.css"

export default function MenuTag()
{
	const menuContext = useContext(MenuContext);

	const getAllisSelected = () => {
		if (menuContext && menuContext.currentMenues.selectedMenu && menuContext.currentMenues.selectedMenu.includes(0))
			return "selected";
		if (menuContext && menuContext.currentMenues.selectedMenu && menuContext.currentMenues.selectedMenu.length == 0)
		{
			if (menuContext.onSelect.handleSelection)
				menuContext.onSelect.handleSelection(0);
		}
		return "tag"
	}

	useEffect(() => {
	}, [menuContext])
	return (
			<div>
				<h2>Menu</h2>
				<div>
					<ul /*className="tags"*/>
						<li key={0}
							className={getAllisSelected()}  
							onClick={() => menuContext && menuContext.currentMenues
								&& menuContext.onSelect.handleSelection(0)
								}>Toutes</li>
					</ul>
					{menuContext && menuContext.currentMenues.menuTags && menuContext.currentMenues.menuTags.map(menuTag => 
						<TagItem 
							id={menuTag.id}
							name={menuTag.name}
							tags={menuTag.tags}
							key={menuTag.id}
							onSelect={menuContext.onSelect.handleSelection}
							tagType="menuTag"
						/>
				)}
				</div>
			</div>
	)
}
