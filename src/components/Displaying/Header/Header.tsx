import "./style.css"
import React, {useContext, useEffect, useState} from "react";
//import RecipeContextInterface from "../../../context/RecipeContext";
import { RecipeContext} from "../../../context/RecipeContext";
import { MenuContext} from "../../../context/MenuContext";
import { menuTagList,  RecipeTagList} from "../../../assets/mock_data/TagData";
import { MenuTagInterface } from "../../../interfaces/Tag/MenuTag.interface";
import { RecipeItemInterface } from "../../../interfaces/Recipe/Recipe.interface";
import { RecipeTagInterface } from "../../../interfaces/Tag/RecipeTag.interface";
import RecipeTag from "../../Filtering/Tag/RecipeTag/RecipeTag";
import TagItem from "../Tag/TagItem/TagItem";

export default function Header()
{
	const recipeContext = useContext(RecipeContext);
	const menuContext = useContext(MenuContext);
	const MenuTaglist = menuTagList;
	const recipeTagList = RecipeTagList;
	const [selectedMenuTags, setSelectedMenuTags] = useState(MenuTaglist);
	const [selectedRecipesTags, setSelectedRecipesTags] = useState<RecipeTagInterface[]>(recipeTagList)
	

	//TODO: A refactoriser pour rassembler avec celle du dessus
	const getSelectedRecipeTags = () => {
		let ret: RecipeTagInterface[] = [];

		let i: number = 0;
		let len: number = recipeContext?.currentRecipes?.selectedRecipes?.length ? recipeContext?.currentRecipes?.selectedRecipes?.length : 0;

		let j: number = 0;
		let len2: number = recipeTagList.length;

		while (i < len)
		{
			j = 0;
			while (j < len2)
			{
				if (recipeContext?.currentRecipes?.selectedRecipes && recipeContext?.currentRecipes?.selectedRecipes[i] == recipeTagList[j].id)
				{
					ret = [...ret, recipeTagList[j]];
				}
				j++;
			}
			i++;
		}
		return (ret);
	}

	useEffect(() => {
		//Récupération depuis le contexte des menus Tags sélectionnés 
		let ret: MenuTagInterface[] | undefined = [];
		//menuTagsOnSelectedId();
		if (recipeContext?.getSelectedMenuTags.getSelectedMenuTags != undefined)
			ret = recipeContext?.getSelectedMenuTags?.getSelectedMenuTags();
		if (ret)
			setSelectedMenuTags(ret);
		let recipe : RecipeTagInterface[] | undefined = getSelectedRecipeTags();
		setSelectedRecipesTags(recipe);
	}, [recipeContext])
	return (
		<>
		<nav className="navbar navbar-light bg-light">
			<span className="navbar-brand mb-0 h1">Tags' header</span>
			<ul>
				{selectedMenuTags && selectedMenuTags.map( (menuTag) => 
				<TagItem 
					tagType="headerMenu"
					id={menuTag.id}
					name={menuTag.name}
					key={menuTag.id}
				/>
				)}
			</ul>
			<br/>
			<ul>
				{selectedRecipesTags && selectedRecipesTags.map( (recipeTag) => 
					<TagItem
						tagType="headerRecipe"
						id={recipeTag.id}
						name={recipeTag.label}
						key={recipeTag.id}
					/>
				)}
			</ul>
		</nav>
		</>
	);
};
