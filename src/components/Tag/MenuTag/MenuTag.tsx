import { useState, useContext } from "react"
import { RecipeContext } from "../../../context/RecipeContext";
import { TagCategoryInterface } from "../../../interfaces/Tag/TagCategory.interface"
import TagItem from "../TagItem/TagItem"
import "./style.css"

interface MenuTagProps {
}

export default function MenuTag(props: MenuTagProps)
{
	const recipeContext = useContext(RecipeContext);

	const isSelected = (menuTag: TagCategoryInterface) => {
		if (recipeContext)
		{
			if (recipeContext.selectedMenu.includes(menuTag.id))
				return true
		}
		return false
	}

	const onSelectMenuTag = (id: number) => {
		console.log(id);
	}

	return (
			<div className="menutag">
				<h2>Menu</h2>
				<div 
					className="tag-list"
				>
					<ul>
						<li key={0}
							className={recipeContext && recipeContext.selectedMenu.includes(0) ? "selected" : "tag"}  
							onClick={() => recipeContext && onSelectMenuTag(0)}>Toutes</li>
					</ul>
					{recipeContext && recipeContext.menuTags.map(menuTag => 
						<TagItem 
							id={menuTag.id}
							name={menuTag.name}
							tags={menuTag.tags}
							key={menuTag.id}
							isSelected={isSelected(menuTag)}
						/>
				)}
				</div>
			</div>
	)
}
