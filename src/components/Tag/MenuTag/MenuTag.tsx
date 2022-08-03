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
	return (
			<div className="menutag">
				<h2>Menu</h2>
				<div 
					className="tag-list"
				>
					<ul>
						<li key={0}
							className={recipeContext && recipeContext.currentRecipes.selectedMenu.includes(0) ? "selected" : "tag"}  
							onClick={() => recipeContext && recipeContext.currentRecipes
								&& recipeContext.onSelect.handleSelection(0)
								}>Toutes</li>
					</ul>
					{recipeContext && recipeContext.currentRecipes.menuTags && recipeContext.currentRecipes.menuTags.map(menuTag => 
						<TagItem 
							id={menuTag.id}
							name={menuTag.name}
							tags={menuTag.tags}
							key={menuTag.id}
							onSelect={recipeContext.onSelect.handleSelection}
						/>
				)}
				</div>
			</div>
	)
}
