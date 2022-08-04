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

		//console.clear();
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
			console.log("all selected")
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

		console.log(newArraylabels);
		setClearedRecipes(newArray);
		console.log(newArray);
	}

	useEffect( () => {
		getClearedRecipes();
		//console.log(recipeContext?.currentRecipes.selectedRecipes?.forEach (recipe => console.log(recipe)));
		//recipeContext?.currentRecipes.recipeTags?.forEach(recipeTag => console.log(recipeTag))
	}, [recipeContext])
	
	return(
		<div className="recipe-tag">
			<h2>Recettes</h2>
			{/*<h3>Il y a {nbSelectedCategories} catégorie(s) sélectionnée(s) !</h3>*/}
			{/*<p>Les catégories séléctionnées sont : </p>*/}
			<div>
				<ul>
					<li key={0} className="selected">Toutes</li>
					{clearedRecipesNames && clearedRecipesNames.map((name,index) => 
					//<li key={name}>{name}</li>)
					<TagItem 
							id={clearedRecipes[index].id}
							name={clearedRecipes[index].label}
							key={clearedRecipes[index].id}
							tagType="recipeTag" 
							tags={[]}					
					/>
					)}
				</ul>
			</div>
		</div>
	)
}
//<TagItem
						//	id={recipe.id ? recipe.id : 0}
						//	name={recipe.label ? recipe.label : ""}
						//	key={recipe.label ? recipe.label : ""}
						//	tagType="recipeTag"
						//	tags={[]}
						//	/>
