import { useState, useContext, useEffect } from "react"
import { MenuContext } from "../../../../context/MenuContext";
import TagItem from "../../../Displaying/Tag/TagItem/TagItem"
import "./style.css"

export default function MenuTag()
{
	const menuContext = useContext(MenuContext);

	useEffect(() => {
	}, [menuContext])
	return (
			<div>
				<h2 style={{marginBottom: "0px"}}>Choisissez vos menus préférés 😋</h2>
				<div>
					{menuContext && menuContext.currentMenues.menuTags && menuContext.currentMenues.menuTags.map(menuTag => 
						<TagItem 
							id={menuTag.id}
							name={menuTag.name}
							tags={menuTag.tags}
							key={menuTag.id}
							tagType="menuTag"
						/>
				)}
				</div>
			</div>
	)
}
