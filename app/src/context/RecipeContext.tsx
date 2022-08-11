/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useContext, useEffect} from "react"
import { RecipeTagInterface } from "../interfaces/Tag/RecipeTag.interface"
import { RecipeItemInterface } from "../interfaces/Recipe/Recipe.interface"
import { MenuTagInterface} from "../interfaces/Tag/MenuTag.interface"
import { allRecipesTag } from "../assets/mock_data/TagData"
import { AllRecipes } from "../assets/mock_data/RecipeData"
import { RecipeTagList, menuTagList} from "../assets/mock_data/TagData"
import  RecipeContextInterface from "../interfaces/ParentContext/RecipeContext.interface"
import { MenuContext } from "./MenuContext"

export const RecipeContext = createContext<RecipeContextInterface | undefined >(undefined);

export const RecipeContextProvider = (props) => {

	const menuContext = useContext(MenuContext);
	const [selectedRecipes, setSelectedRecipes] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
	const [recipeTags, setRecipesTags] = useState(allRecipesTag);

	const handleRecipeSelection = (id: number) => {
		let newArray: number[] | undefined = [];

		if (selectedRecipes.includes(id))
		{
			for (let i = 0; i < selectedRecipes.length; i++)
			{
				if (selectedRecipes[i] !== id)
					newArray.push(selectedRecipes[i])
			}
		}
		else
		{
			newArray = selectedRecipes;
			newArray = [...selectedRecipes, id];
		}
		setSelectedRecipes(newArray);
	}

	const dropDuplicates = (arr: any[]) => {
		return (arr.filter((value, index, self) =>
					index === self.findIndex((t) => (
						t.name === value.name))))
	}
	
	const getRecipesToDisplay = () => {
		let arrToDisplay: RecipeItemInterface[] | undefined = [];

		if (selectedRecipes.length === AllRecipes.length)
			return (AllRecipes);
		else
		{
			for (let i = 0; i < selectedRecipes.length; i++)
			{
				for (let j = 0; j < AllRecipes?.length; j++)
				{
					for (let k = 0; k < AllRecipes[j].tags.length; k++)
					{
						if (selectedRecipes && AllRecipes[j].tags[k].id === selectedRecipes[i])
							arrToDisplay = [...arrToDisplay, AllRecipes[j]];
					}
				}
			}
		}
		arrToDisplay = dropDuplicates(arrToDisplay);
		return (arrToDisplay);
	}

	const getAllRecipesTags = () => 
	{
		return (allRecipesTag)
	}

	const getSelectedRecipesTags =  () => {
		let ret: RecipeTagInterface[] = [];

		for (let i = 0; i < selectedRecipes.length; i++)
		{
			for (let j = 0; j < RecipeTagList.length; j++)
			{
				if (selectedRecipes && selectedRecipes[i] === RecipeTagList[j].id)
					ret = [...ret, RecipeTagList[j]];
			}
		}
		return (ret);
	}

	const getSelectedMenuTags = () =>  {
			let selected: MenuTagInterface[] = [];

			for (let i = 0; i < menuContext.currentMenues.selectedMenu?.length; i++)
			{
				for (let j = 0; j < menuTagList.length; j++)
				{
					if (menuContext.currentMenues.selectedMenu && menuContext.currentMenues.selectedMenu[i] === menuTagList[j].id)
						selected = [...selected, menuTagList[j]];
				}
			}
			return (selected);
	}

	const getCorrespondingRecipeTagForSelectedMenus = (id: number) => {
		for (let i = 0; i < menuTagList.length; i++)
		{
			if (menuTagList[i].id === id)
				return menuTagList[i].tags;
		}
	}

	const getClassName = (id: number, tagType: string) => 
	{
		if (tagType === "menuTag")
		{
			if (menuContext.currentMenues.selectedMenu && menuContext.currentMenues.selectedMenu.some( elem => {
					if (elem === id)
						return true
					return false}))
				return true
			else
				return false
		}
		else if (tagType === "recipeTag")
		{
			if (selectedRecipes && selectedRecipes.some( elem => {
					if (elem === id)
						return true
					return false}))
				return true
			else
				return false
		}
	}

	const updateSelectedRecipesTagsOnMenuSelection = () => {
		let ret: RecipeTagInterface[] | undefined = getAllRecipesTags();
		let newSelected: any[] = [];
	
		for (let i = 0; i < ret.length; i++)
		{
			if (selectedRecipes.includes(ret[i].id) && menuContext.currentMenues.selectedMenu.includes(ret[i].menuId))
				newSelected = [...newSelected, ret[i].id];
			else if (menuContext.adding.adding === true)
			{
				let tagsToAdd = getCorrespondingRecipeTagForSelectedMenus(menuContext.adding.id);
				for (let i = 0; i < tagsToAdd.length; i++)
				{
					if (!newSelected.includes(tagsToAdd[i].id))
						newSelected = [...newSelected, tagsToAdd[i].id];
				}
			}
		}
		setRecipesTags(ret);
		setSelectedRecipes(newSelected);
	}

	useEffect(() => {
		updateSelectedRecipesTagsOnMenuSelection();
	}, [menuContext])

	return (
		<RecipeContext.Provider
			value={
				{
					currentRecipes: {
					recipeTags, 
					selectedRecipes
				},
					onSelectRecipe: { handleSelection: handleRecipeSelection},
					getRecipesToDisplay: { getRecipesToDisplay},
					getSelectedMenuTags: { getSelectedMenuTags},
					getSelectedRecipesTags: { getSelectedRecipesTags},
					getClassName: { getClassName},
				}
			}
		>
			{props.children}
		</RecipeContext.Provider>
	)
}

export default RecipeContext;
