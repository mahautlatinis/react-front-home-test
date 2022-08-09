import { useContext, useEffect, useState} from "react";
import { MenuContext } from "../../../../context/MenuContext";
import { RecipeContext} from "../../../../context/RecipeContext";
import TagItem from "../../../Displaying/Tag/TagItem/TagItem";
import { MenuTagInterface } from "../../../../interfaces/Tag/MenuTag.interface";
import { menuTagList,  RecipeTagList} from "../../../../assets/mock_data/TagData";
import { RecipeTagInterface } from "../../../../interfaces/Tag/RecipeTag.interface";

export default function RecipeTag()
{
	const MenuTaglist = menuTagList;
	//"Consommation" des contexts
	const recipeContext = useContext(RecipeContext);
	const menuContext = useContext(MenuContext);
	const recipeTagList = RecipeTagList;
	//const [selectedMenuTags, setSelectedMenuTags] = useState(MenuTaglist);
	const [selectedRecipesTags, setSelectedRecipesTags] = useState<RecipeTagInterface[]>(recipeTagList)

	useEffect( () => {
		//recipeContext.getRecipesToDisplay.getRecipesToDisplay();
		let ret: MenuTagInterface[] | undefined = [];

		if (recipeContext?.getSelectedMenuTags.getSelectedMenuTags !== undefined)
			ret = recipeContext?.getSelectedMenuTags?.getSelectedMenuTags();
		if (ret)
			setSelectedMenuTags(ret);

		//Récupérations des tags de recttes sélectionnés
		let recipe : RecipeTagInterface[] | undefined = [];
		
		if (recipeContext?.getSelectedRecipesTags.getSelectedRecipesTags !== undefined)
			recipe = recipeContext?.getSelectedRecipesTags?.getSelectedRecipesTags();
		setSelectedRecipesTags(recipe);
	}, [recipeContext])

	useEffect( () => {
	}, [menuContext])
	
	return(
		<div className="recipe-tag">
			<br />
			<h3 style={{marginBottom: "0px"}}>Vos menus proposent des recettes aux thématiques gourmandes 🍂</h3>
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
