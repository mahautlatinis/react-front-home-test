import React, { useContext, useEffect } from "react"
import { MenuContext } from "../../../../context/MenuContext";
import TagItem from "../../../Displaying/Tag/TagItem/TagItem"

export default function MenuTag()
{
	const menuContext = useContext(MenuContext);

	useEffect(() => {
	}, [menuContext])
	
	return (
			<div>
				<h2>Choisissez vos menus préférés 😋</h2>
				<div style={{height: "100px",padding:"15px", overflowX:"scroll", overflowY:"hidden", whiteSpace:"nowrap", justifyContent: "space-evenly", alignItems: "center"}}>
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
