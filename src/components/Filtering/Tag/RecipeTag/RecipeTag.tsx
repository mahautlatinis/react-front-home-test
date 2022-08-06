import { useContext, useState, useEffect} from "react";
import { MenuContext } from "../../../../context/MenuContext";
import { RecipeTagList } from "../../../../assets/mock_data/TagData";
import TagItem from "../../../Displaying/Tag/TagItem/TagItem";
import { RecipeTagInterface } from "../../../../interfaces/Tag/RecipeTag.interface";
import { menuTagList } from "../../../../assets/mock_data/TagData";
import { RecipeContext } from "../../../../context/RecipeContext";
import "./style.css"

export default function RecipeTag()
{
	//"Consommation" des contexts
	const recipeContext = useContext(RecipeContext);
	const menuContext = useContext(MenuContext);

	useEffect( () => {
	}, [recipeContext, menuContext])
	
	return(
		<div className="recipe-tag">
			<br />
			<h3 style={{marginBottom: "0px"}}>Vos menus proposent des recettes aux thématiques gourmandes 🍂</h3>
			<div className="recipeTags">
				<ul>
				</ul>
					{recipeContext?.currentRecipes.recipeTags?.map((recipes) => 
					<TagItem 
							id={recipes.id} 
							name={recipes.label}
							key={recipes.id}
							tagType="recipeTag"
							tags={[]}					
					/>
					)}
			</div>
		</div>
	)
}
