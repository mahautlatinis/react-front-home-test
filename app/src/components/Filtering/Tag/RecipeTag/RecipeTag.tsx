import React, { useContext, useEffect} from "react";
import { MenuContext } from "../../../../context/MenuContext";
import { RecipeContext} from "../../../../context/RecipeContext";
import TagItem from "../../../Displaying/Tag/TagItem/TagItem";

export default function RecipeTag()
{
	const recipeContext = useContext(RecipeContext);
	const menuContext = useContext(MenuContext);

	useEffect( () => {
	}, [recipeContext, menuContext])
	
	return(
		<div style={{padding: "0px", margin: "0px"}}>
			<h3>Vos menus proposent des recettes aux thématiques gourmandes 🍂</h3>
			<div id="recipeTags" style={{height: "100px",padding:"15px", overflowX:"scroll", overflowY:"hidden", whiteSpace:"nowrap", justifyContent: "space-evenly", alignItems: "center"}}>
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
