import { useState, useContext, useEffect } from "react"
import { MenuContext } from "../../../context/MenuContext";
import { TagCategoryInterface } from "../../../interfaces/Tag/TagCategory.interface"
import TagItem from "../TagItem/TagItem"
import "./style.css"


export default function MenuTag()
{
	const menuContext = useContext(MenuContext);

	useEffect(() => {
		console.log(menuContext);
	}, [menuContext])
	return (
			<div className="menutag">
				<h2>Menu</h2>
				<div 
					className="tag-list"
				>
					<ul>
						<li key={0}
							className={menuContext && menuContext.currentRecipes.selectedMenu.includes(0) ? "selected" : "tag"}  
							onClick={() => menuContext && menuContext.currentRecipes
								&& menuContext.onSelect.handleSelection(0)
								}>Toutes</li>
					</ul>
					{menuContext && menuContext.currentRecipes.menuTags && menuContext.currentRecipes.menuTags.map(menuTag => 
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
