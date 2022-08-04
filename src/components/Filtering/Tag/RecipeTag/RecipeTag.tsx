import { useContext, useState, useEffect} from "react";
import { MenuContext } from "../../../../context/MenuContext";
import { RecipeTagList } from "../../../../assets/mock_data/TagData";
import TagItem from "../../../Displaying/Tag/TagItem/TagItem";
import { RecipeTagInterface } from "../../../../interfaces/Tag/RecipeTag.interface";
import { menuTagList } from "../../../../assets/mock_data/TagData";
import { MenuTagInterface } from "../../../../interfaces/Tag/MenuTag.interface";
import { RecipeContext } from "../../../../context/RecipeContext";
import "./style.css"

export default function RecipeTag()
{
	//"Consommation" des contexts
	const recipeContext = useContext(RecipeContext)
	const menuContext = useContext(MenuContext)

	//const getAllisSelected = () => {	
	//	if (recipeContext && recipeContext.currentRecipes.selectedRecipes && recipeContext.currentRecipes.selectedRecipes.length == 0)
	//	{
	//		if (recipeContext.onSelectRecipe.handleSelection && recipeContext.currentRecipes.selectedRecipes.length == 0)
	//			recipeContext.onSelectRecipe.handleSelection(0);
	//	}
	//	if (recipeContext && recipeContext.currentRecipes.selectedRecipes && recipeContext.currentRecipes.selectedRecipes.includes(0))
	//		return "selected";
	//	else if (!(recipeContext && recipeContext.currentRecipes.selectedRecipes))
	//		return "selected";
	//	return ("tag");
	//}

	useEffect( () => {
		//console.log("Printing current recipes");
		recipeContext?.currentRecipes.clearedRecipes?.map( (recipes) => {
			console.log(recipes)
		})
	}, [recipeContext, menuContext])
	
	return(
		<div className="recipe-tag">
			<h2>Recettes</h2>
			{/*<h3>Il y a {nbSelectedCategories} catégorie(s) sélectionnée(s) !</h3>*/}
			{/*<p>Les catégories séléctionnées sont : </p>*/}
			<div className="recipeTags">
				<ul>
					{/*<li key={0} 
						onClick={() => recipeContext && recipeContext.onSelectRecipe.handleSelection
								&& recipeContext.onSelectRecipe.handleSelection(0)}
						>Toutes</li>*/}
				</ul>
					{recipeContext?.currentRecipes.clearedRecipes?.map((recipes) => 
					<TagItem 
							id={recipes.id} 
							name={recipes.label}
							key={recipes.id}
							tagType="recipeTag"
							onSelect={recipeContext.onSelectRecipe.handleSelection}
							tags={[]}					
					/>
					)}
			</div>
		</div>
	)
}
