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

export const RecipeContextProvider = (props: any) => {

	const menuContext = useContext(MenuContext);
	const [selectedRecipes, setSelectedRecipes] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
	const [recipeTags, setRecipesTags] = useState(allRecipesTag);

	const handleRecipeSelection = (id: number) => {
		let newArray: number[] = [];

		if (selectedRecipes.includes(id))
		{
			selectedRecipes.forEach( element => {
				if (element !== id)
					newArray.push(element)
				})
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
		let arrToDisplay: RecipeItemInterface[] = [];

		if (selectedRecipes.length === AllRecipes.length)
			return (AllRecipes);
		else
		{
			selectedRecipes.forEach( element => {
				AllRecipes.forEach( elem => {
					elem.tags.forEach( tag => {
						if (tag.id === element)
							arrToDisplay = [...arrToDisplay, elem];
					})
				})
			})
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

		selectedRecipes.forEach( elem => {
			RecipeTagList.forEach(element => {
				if (selectedRecipes && elem === element.id)
					ret = [...ret, element];
			})
		})
		return (ret);
	}

	const getSelectedMenuTags = () =>  {
		let selected: MenuTagInterface[] = [];

		if (menuContext && menuContext.currentMenues.selectedMenu)
		{
			menuContext.currentMenues.selectedMenu.forEach(element => {
				menuTagList.forEach( elem => {
					if (element === elem.id)
						selected = [...selected, elem];
				})
			})
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
			if (menuContext && menuContext.currentMenues.selectedMenu && menuContext.currentMenues.selectedMenu.some( elem => {
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
		return (undefined)
	}

	const updateSelectedRecipesTagsOnMenuSelection = () => {
		let rets: RecipeTagInterface[] | undefined = getAllRecipesTags();
		let newSelected: any[] = [];

		rets.forEach((ret) => {
			if (selectedRecipes.includes(ret.id) && menuContext?.currentMenues?.selectedMenu && menuContext.currentMenues.selectedMenu.includes(ret.menuId))
				newSelected = [...newSelected, ret.id];
			else if (menuContext?.adding.adding === true)
			{
				let tagsToAdd = getCorrespondingRecipeTagForSelectedMenus(menuContext.adding.id);
				if (tagsToAdd)
				{
					tagsToAdd.forEach(tag => {
						if (!newSelected.includes(tag.id))
							newSelected = [...newSelected, tag.id];})
				}
			}
		})
		setRecipesTags(rets);
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