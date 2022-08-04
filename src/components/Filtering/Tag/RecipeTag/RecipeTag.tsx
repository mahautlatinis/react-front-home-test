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
	const recipeContext = useContext(RecipeContext)
	const [clearedRecipes, setClearedRecipes] = useState<RecipeTagInterface[]>([])
	const [clearedRecipesNames, setClearedRecipesNames] = useState<string[]>([])
	const [nbSelectedCategories, setNbSelectedCategories] = useState<number>(0)

	const getClearedRecipes = () => 
	{
		let newArray: RecipeTagInterface[] = [];
		let newArraylabels: string[] = [];

		recipeContext?.currentRecipes.recipeTags?.forEach(recipeTag => {
			if (recipeTag.label && !(newArraylabels?.includes(recipeTag.label)))
			{
				newArraylabels = [...newArraylabels, recipeTag.label];
				newArray = [...newArray, recipeTag]
			}
		})
		setClearedRecipesNames(newArraylabels);
		if (newArray.length == 0)
			setClearedRecipes(RecipeTagList);
		if (newArraylabels.length == 0)
		{
			let i = 0;
			newArraylabels = []
			while (i < RecipeTagList.length)
			{
				if (RecipeTagList[i].label)
					newArraylabels.push(RecipeTagList[i].label)
				i++;
			}
			setClearedRecipesNames(newArraylabels);
			return;
		}
		setClearedRecipes(newArray);
	}

	const getAllisSelected = () => {	
		if (recipeContext && recipeContext.currentRecipes.selectedRecipes && recipeContext.currentRecipes.selectedRecipes.length == 0)
		{
			if (recipeContext.onSelectRecipe.handleSelection && recipeContext.currentRecipes.selectedRecipes.length == 0)
				recipeContext.onSelectRecipe.handleSelection(0);
		}
		if (recipeContext && recipeContext.currentRecipes.selectedRecipes && recipeContext.currentRecipes.selectedRecipes.includes(0))
			return "selected";
		else if (!(recipeContext && recipeContext.currentRecipes.selectedRecipes))
			return "selected";
		return ("tag");
	}

	useEffect( () => {
		getClearedRecipes();
	}, [recipeContext])
	
	return(
		<div className="recipe-tag">
			<h2>Recettes</h2>
			{/*<h3>Il y a {nbSelectedCategories} catégorie(s) sélectionnée(s) !</h3>*/}
			{/*<p>Les catégories séléctionnées sont : </p>*/}
			<div className="recipeTags">
				<ul /*className="tags"*/>
					<li key={0} 
						className={getAllisSelected()}
						onClick={() => recipeContext && recipeContext.onSelectRecipe.handleSelection
								&& recipeContext.onSelectRecipe.handleSelection(0)}
						>Toutes</li>
				</ul>
					{clearedRecipesNames && clearedRecipesNames.map((name,index) => 
					<TagItem 
							id={clearedRecipes[index].id}
							name={clearedRecipes[index].label}
							key={clearedRecipes[index].id}
							tagType="recipeTag"
							onSelect={recipeContext?.onSelectRecipe.handleSelection}
							tags={[]}					
					/>
					)}
				
			</div>
		</div>
	)
}
