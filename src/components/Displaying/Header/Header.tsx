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

export default function Header()
{
	const recipeContext = useContext(RecipeContext);
	const menuContext = useContext(MenuContext);
	const MenuTaglist = menuTagList;
	const recipeTagList = RecipeTagList;
	const [selectedMenuTags, setSelectedMenuTags] = useState(MenuTaglist);
	const [selectedRecipesTags, setSelectedRecipesTags] = useState<RecipeTagInterface[]>(recipeTagList)
	

	//TODO: refactor les noms des variables 
	//TODO: mettre ses fonctions plutôt dans le parent pour qu'elles soient réutilisables
	const menuTagsOnSelectedId = () => {
		let selected: MenuTagInterface[] | undefined = [];

		//Faire le tour des id selectionnés et récupérer les menus correspondant dans la liste
		let i: number = 0;
		let len: number = menuContext?.currentMenues?.selectedMenu?.length ? menuContext?.currentMenues?.selectedMenu?.length  : 0
		let j: number = 0;
		let len2: number = MenuTaglist.length;
		while (i < len)
		{
			j = 0;
			while (j < len2)
			{
				if (menuContext?.currentMenues?.selectedMenu && menuContext?.currentMenues?.selectedMenu[i] == menuTagList[j].id)
				{
					selected = [...selected, menuTagList[j]];
				}
				j++;
			}
			i++;
		}
		return (selected);
	}

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
		console.log("updating menus");
		//console.log(JSON.stringify(menuContext));
		let ret: MenuTagInterface[] = menuTagsOnSelectedId();
		//console.log(ret);
		setSelectedMenuTags(ret);

		console.log("updating recipes");
		let recipe : RecipeTagInterface[] | undefined = getSelectedRecipeTags();
		//console.log("recipe are " + JSON.stringify(recipe));
		setSelectedRecipesTags(recipe);
	}, [recipeContext])
	return (
		<>
		{/*<nav></nav>*/}
		<nav className="navbar navbar-light bg-light">
			<span className="navbar-brand mb-0 h1">Navbar</span>
			{/*<h2>Selected menus tags</h2>*/}
			<ul>
				{selectedMenuTags && selectedMenuTags.map( (menuTag) => <button>{menuTag.name}</button>)}
			</ul>
			<br/>
			<ul>
				{selectedRecipesTags && selectedRecipesTags.map( (recipeTag) => <button>{recipeTag.label}</button>)}
			</ul>
		</nav>
		</>
	);
};
