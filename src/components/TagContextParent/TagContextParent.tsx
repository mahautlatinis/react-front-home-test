import React from "react"
import { ContextInterface, contextInitializer } from "../../interfaces/ParentContext/ParentContext.interface"
import { RecipeTagInterface } from "../../interfaces/Tag/RecipeTag.interface";
import "../../assets/styles/styles.css"
import Tag from "../../components/Displaying/Tag/Tag";
import MenuContextInterface, { MenuContext } from "../../context/MenuContext";
import { menuTagList, allRecipesTag, seasons, traditional, specialDiet, winter, summer, fall, spring, appetizer, diet, dessert, vegan} from "../../assets/mock_data/TagData";
import {RecipeContext} from "../../context/RecipeContext";
import { RecipeTagList } from "../../assets/mock_data/TagData";
import Recipe  from "../../components/Displaying/Recipe/Recipe"
import RecipeTag from "../Filtering/Tag/RecipeTag/RecipeTag";
import { RecipeTagType } from "../../interfaces/Tag/RecipeTag.interface";
import { MenuTagInterface } from "../../interfaces/Tag/MenuTag.interface";
import Header from "../Displaying/Header/Header";

export default class TagContextParent extends React.Component<{}, ContextInterface> {

	constructor(props: any) {
    super(props);
		this.state = contextInitializer;
		let ret: RecipeTagInterface[] | undefined = this.getSelectedRecipes();
	}

	getCorrespondingTag = (id: number) => {
		let all = menuTagList;
		let i = 0;
		while (i < menuTagList.length)
		{
			if (menuTagList[i].id === id)
				return menuTagList[i].tags;
			i++;
		}
	}

	//Permet de gérer la sélection des MenuTag
	handleRecipeSelection = (id: number) => {
		let newArray: number[] | undefined = [];
		if (this.state.currentRecipes.selectedRecipes.includes(id))
		{
			for (let i = 0; i < this.state.currentRecipes.selectedRecipes.length; i++)
			{
				if (this.state.currentRecipes.selectedRecipes[i] != id)
					newArray.push(this.state.currentRecipes.selectedRecipes[i])
			}
		}
		else
		{
			newArray = this.state.currentRecipes.selectedRecipes;
			newArray = [...this.state.currentRecipes.selectedRecipes, id];
		}

		this.setState
		({
			currentMenues: {
				selectedMenu: this.state.currentMenues.selectedMenu,
				menuTags: this.state.currentMenues.menuTags,
				maxSelection: this.state.currentMenues.maxSelection
			},
			currentRecipes: {
				recipeTags: this.state.currentRecipes.recipeTags,
				selectedRecipes: newArray,
			}})
	}

	//Permet de sélectionner les menus, mise à jour du contexte
	handleMenuSelection = (id: number) =>  {
		if (!id)
			return;
		let newArray: number[] = [];

		if (this.state.currentMenues.selectedMenu.includes(id))
		{
			for (let i = 0; i < this.state.currentMenues.selectedMenu.length; i++)
			{
				if (this.state.currentMenues.selectedMenu[i] != id)
					newArray.push(this.state.currentMenues.selectedMenu[i])
			}
			if (newArray.length == 0)
				newArray = [1];
		}
		else
		{
			newArray = this.state.currentMenues.selectedMenu;
			if (this.state.currentMenues.selectedMenu.includes(0))
				newArray = [id]
			else if (id == 0)
				newArray = [0];
			else
				newArray = [...this.state.currentMenues.selectedMenu, id];
		}
		this.setState({
			currentMenues: {
				selectedMenu: newArray,
				menuTags: this.state.currentMenues.menuTags,
				maxSelection: this.state.currentMenues.maxSelection
			}},
			() => {
				let ret: RecipeTagInterface[] | undefined = this.getSelectedRecipes();
				//console.log(ret);
				this.setState({
				currentMenues: {
					selectedMenu: newArray,
					menuTags: this.state.currentMenues.menuTags,
					maxSelection: this.state.currentMenues.maxSelection
				},
				currentRecipes: {
					recipeTags: ret,
					selectedRecipes: []
				}
				})
			})
		
	}

	onMenuSelectionDisplayRecipes = () => {
		let newArray: any[] = [];

		let tags: any;

		if (this.state.currentMenues.selectedMenu)
		{
			for (let i = 0; i < this.state.currentMenues.selectedMenu.length; i++)
			{
				let len: any = 0
				tags = this.getCorrespondingTag(this.state.currentMenues.selectedMenu[i]);
				newArray = [...newArray, tags]
			}
		}
		return (newArray);
	}

	//Permet d'extraire l'id et le nom (label) des recettes dépendantes des sélection
	getSelectedRecipes = () => 
	{
		let newArray: RecipeTagInterface[] = [];

		if (this.state.currentMenues.selectedMenu.length == 3)
			return allRecipesTag;

		if (this.state.currentMenues.selectedMenu.includes(1))
		{
			newArray = [...newArray, winter];
			newArray = [...newArray, summer];
			newArray = [...newArray, fall];
			newArray = [...newArray, spring];
		}
			
		if (this.state.currentMenues.selectedMenu.includes(2))
		{
			newArray = [...newArray, appetizer];
			newArray = [...newArray, dessert];
		}
			
		if (this.state.currentMenues.selectedMenu.includes(3))
		{
			newArray = [...newArray, vegan];
			newArray = [...newArray, diet];
		}
		return (newArray);
	}

	//Permet de filtrer pour qu'il n'y ait pas de doublons dans les tags recettes
	setClearedRecipes = (cleared: any, clearedNames: string[]) =>
	{
		this.setState({
			currentMenues: {
				selectedMenu: this.state.currentMenues.selectedMenu,
				menuTags: this.state.currentMenues.menuTags,
				maxSelection: this.state.currentMenues.maxSelection
			},
			currentRecipes: {
				recipeTags: this.state.currentRecipes.recipeTags,
				selectedRecipes: [],//TODO
			}
		})
	}

	render() {
		return (
		<>
			<MenuContext.Provider
                value={
                    {currentMenues: {
                        selectedMenu: this.state.currentMenues.selectedMenu,
                        menuTags: this.state.currentMenues.menuTags,
                        maxSelection: 3}, 
                    onSelect: {
                        handleSelection: this.handleMenuSelection}}}>
            <RecipeContext.Provider
                value={
                    {currentRecipes: {
						recipeTags: this.state.currentRecipes.recipeTags,
						selectedRecipes: this.state.currentRecipes.selectedRecipes,
						},
					onSelectRecipe: {handleSelection: this.handleRecipeSelection}
				}}>
				<Header />
                <Tag />
				<Recipe />
				</RecipeContext.Provider>
			</MenuContext.Provider>
		</>)
	}
}
