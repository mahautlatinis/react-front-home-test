import { useContext, useState, useEffect} from "react";
import { MenuContext } from "../../../../context/MenuContext";
import { RecipeTagList } from "../../../../assets/mock_data/TagData";
import TagItem from "../../../Displaying/Tag/TagItem/TagItem";
import { RecipeTagInterface } from "../../../../interfaces/Tag/RecipeTag.interface";
import { menuTagList } from "../../../../assets/mock_data/TagData";
import { MenuTagInterface } from "../../../../interfaces/Tag/MenuTag.interface";
import { RecipeContext } from "../../../../context/RecipeContext";

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
		{
			//console.log("all selected")
			setClearedRecipes(RecipeTagList);
		}
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

		//console.log(newArraylabels);
		setClearedRecipes(newArray);
		//console.log(newArray);
	}

	useEffect( () => {
		getClearedRecipes();
		//console.log("Selected recipes : " + recipeContext?.currentRecipes.selectedRecipes);
	}, [recipeContext])
	
	return(
		<div className="recipe-tag">
			<h2>Recettes</h2>
			{/*<h3>Il y a {nbSelectedCategories} catégorie(s) sélectionnée(s) !</h3>*/}
			{/*<p>Les catégories séléctionnées sont : </p>*/}
			<div>
				<ul>
					<li key={0} 
						className={recipeContext && recipeContext.currentRecipes.selectedRecipes && recipeContext.currentRecipes.selectedRecipes.includes(0) ? "selected" : "tag"} 
						>Toutes</li>
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
				</ul>
			</div>
		</div>
	)
}
