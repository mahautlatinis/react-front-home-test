import React from "react"
import { ContextInterface, contextInitializer } from "../../interfaces/ParentContext/ParentContext.interface"
import { RecipeTagInterface } from "../../interfaces/Tag/RecipeTag.interface";
import "../../assets/styles/styles.css"
import Tag from "../Displaying/Tag/Tag";
import  { MenuContext } from "../../context/MenuContext";
import { menuTagList, allRecipesTag, winter, summer, fall, spring, appetizer, diet, dessert, vegan} from "../../assets/mock_data/TagData";
import {RecipeContext} from "../../context/RecipeContext";
import { RecipeTagList } from "../../assets/mock_data/TagData";
import Recipe  from "../Displaying/Recipe/Recipe"
import { MenuTagInterface } from "../../interfaces/Tag/MenuTag.interface";
import Header from "../Displaying/Header/Header";
import { RecipeItemInterface} from "../../interfaces/Recipe/Recipe.interface"
import { AllRecipes } from "../../assets/mock_data/RecipeData";
import Presentation from "../Displaying/Presentation/Presentation";
import Footer from "../Displaying/Footer/Footer";


export default class TagContextParent extends React.Component<{}, ContextInterface> {

	constructor(props: any) {
    super(props);
		this.state = contextInitializer;
	}

	getCorrespondingTag = (id: number) => {

		//console.log("get corresponding tag");

		let i = 0;
		while (i < menuTagList.length)
		{
			if (menuTagList[i].id === id)
				return menuTagList[i].tags;
			i++;
		}
	}

	//Permet de retourner un tableau indiquant les menus tags sélectionnés
	getSelectedMenuTags = () =>  {

		//console.log("get selected menu tags")
		let selected: MenuTagInterface[] = [];

		//Faire le tour des id selectionnés et récupérer les menus correspondant dans la liste
		let i: number = 0, j: number = 0, len2: number = menuTagList.length;
		let len: number = this.state.currentMenues?.selectedMenu?.length ? this.state.currentMenues?.selectedMenu?.length  : 0
		while (i < len)
		{
			j = 0;
			while (j < len2)
			{
				if (this.state.currentMenues?.selectedMenu && this.state?.currentMenues?.selectedMenu[i] === menuTagList[j].id)
					selected = [...selected, menuTagList[j]];
				j++;
			}
			i++;
		}
		return (selected);
	}

	//Permet de retourner un tableau de RecipeTags afin de voir les recipe tags sélectionnés
	//Lorsqu'un menu est désélectionné les autres tags doivent etre automatiquement sélectionnés
	//Utilisée principalement dans le header
	getSelectedRecipesTags =  () => {
		let ret: RecipeTagInterface[] = [];

		let i: number = 0, j: number = 0, len2: number = RecipeTagList.length;
		let len: number = this.state?.currentRecipes?.selectedRecipes?.length ? this.state.currentRecipes?.selectedRecipes?.length : 0;

		while (i < len)
		{
			j = 0;
			while (j < len2)
			{
				if (this.state.currentRecipes?.selectedRecipes && this.state.currentRecipes?.selectedRecipes[i] === RecipeTagList[j].id)
				{
					ret = [...ret, RecipeTagList[j]];
				}
				j++;
			}
			i++;
		}

		return (ret);
	}

	//Va permettre aux TagItem de définir leur className en fonction du retour
	getClassName = (id: number, tagType: string) => 
	{
		//console.log("get className called")

		if (tagType === "menuTag")
		{
			if (this.state.currentMenues.selectedMenu && this.state.currentMenues.selectedMenu.some( elem => {
				if (elem === id)
					return true
				return false}))
				return true
			else
				return false
		}
		else if (tagType === "recipeTag")
		{
			if (this.state.currentRecipes.selectedRecipes && this.state.currentRecipes.selectedRecipes.some( elem => {
				if (elem === id)
					return true
				return false}))
				return true
			else
				return false
		}
		return false
	}

	//Permet de gérer la sélection des MenuTag
	handleRecipeSelection = (id: number) => {

		console.log("handle recipe selection called");

		let newArray: number[] | undefined = [];
		if (this.state.currentRecipes.selectedRecipes.includes(id))
		{
			for (let i = 0; i < this.state.currentRecipes.selectedRecipes.length; i++)
			{
				if (this.state.currentRecipes.selectedRecipes[i] !== id)
					newArray.push(this.state.currentRecipes.selectedRecipes[i])
			}
		}
		else
		{
			newArray = this.state.currentRecipes.selectedRecipes;
			newArray = [...this.state.currentRecipes.selectedRecipes, id];
		}

		//console.log("handle recipe selection called");
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

		console.log("handle menu selection called");

		if (!id)
			return;
		let newArray: number[] = [];

		if (this.state.currentMenues.selectedMenu.includes(id))
		{
			for (let i = 0; i < this.state.currentMenues.selectedMenu.length; i++)
			{
				if (this.state.currentMenues.selectedMenu[i] !== id)
					newArray.push(this.state.currentMenues.selectedMenu[i])
			}
			if (newArray.length === 0)
				newArray = [1];
		}
		else
		{
			newArray = this.state.currentMenues.selectedMenu;
			if (this.state.currentMenues.selectedMenu.includes(0))
				newArray = [id]
			else if (id === 0)
				newArray = [0];
			else
				newArray = [...this.state.currentMenues.selectedMenu, id];
		}

		let newRecipes : any = [];
		let newRecipesId: number[] = [];
		newRecipesId = this.onMenuSelectionDisplayRecipes();
		let i: number = 0;
		while (i < newRecipes.length)
		{
			newRecipesId = [...newRecipesId, newRecipes[i].id];
			i++;
		}
		let ret: RecipeTagInterface[] | undefined = this.getSelectedRecipes();
		//console.log("new recipes are " + newRecipesId)

		this.setState({
			currentMenues: {
				selectedMenu: newArray,
				menuTags: this.state.currentMenues.menuTags,
				maxSelection: this.state.currentMenues.maxSelection
			},
			currentRecipes: {
					recipeTags: ret,
					selectedRecipes: newRecipesId
				}})
			//() => {
			//	//let ret: RecipeTagInterface[] | undefined = this.getSelectedRecipes();
			//	let ret: RecipeTagInterface[] | undefined = this.getSelectedRecipes();
			//	//console.log("ret is ", ret)
			//	//console.log(ret);
			//	this.setState({
			//	currentMenues: {
			//		selectedMenu: newArray,
			//		menuTags: this.state.currentMenues.menuTags,
			//		maxSelection: this.state.currentMenues.maxSelection
			//	},
			//	currentRecipes: {
			//		recipeTags: ret,
			//		selectedRecipes: newRecipesId
			//	}
			//	})
			//})
	}

	//Pour permet l'affichage des recettes, on retourne un tableau aevc les "Recipe Item"
	getRecipesToDisplay = () => {

		console.log("get recipes to display");

		let ret: any = [];
		ret = this.getSelectedRecipes();

		let arrToDisplay: RecipeItemInterface[] | undefined = [];

		//let len: number = this.state.currentRecipes?.selectedRecipes?.length ? this.state?.currentRecipes?.selectedRecipes?.length : 0
		let len: number = ret.length;

		if (AllRecipes)
		{
		//Si tous les tags sont sélectionnés, retourner directement la liste entière des recettes 
			if (len === 8)
				return (AllRecipes);
			//Si tous les tags ne sont pas sélectionnés, chercher les recettes correspondantes 
			else
			{
				let i: number = 0, j: number = 0, k: number = 0, len3: number = 0;
				let len2: number = AllRecipes?.length ? AllRecipes?.length : 0;
				while (i < len)
				{
					//console.log("here 1.")
					j = 0;
					while (j < len2)
					{
						//console.log("here 2.")
						len3 = AllRecipes[j].tags.length;
						k = 0;
						while (k < len3)
						{
							//console.log("here 3.")
							if (this.state.currentRecipes?.selectedRecipes && AllRecipes[j].tags[k].id === this.state.currentRecipes?.selectedRecipes[i])
								arrToDisplay = [...arrToDisplay, AllRecipes[j]];
							k++;
						}
						j++;
					}
					i++;
				}
				console.log("arr to display", arrToDisplay);

				//Filtrage pour éviter les doublons dans le tableau, pas besoin car pas de doublons 
				//arrToDisplay = arrToDisplay.filter((value, index, self) =>
				//	index === self.findIndex((t) => (
				//		t.name === value.name)))

				
				//Shuffling pour qu'on voit bien que ca se rafraichit à chaque clique
				arrToDisplay.sort(() => Math.random() - 0.5)
				return (arrToDisplay)
				}
			}
			return (arrToDisplay);
	}

	//DEPRECATED
	onMenuSelectionDisplayRecipes = () => {

		//console.log("on Menu selection display recipes");

		let newArray: any[] = [];
		let tags: any;

		if (this.state.currentMenues.selectedMenu)
		{
			for (let i = 0; i < this.state.currentMenues.selectedMenu.length; i++)
			{
				tags = this.getCorrespondingTag(this.state.currentMenues.selectedMenu[i]);
				newArray = [...newArray, tags]
			}
		}

		//console.log("new array display recipes ", newArray);
		return (newArray);
	}

	//Permet d'extraire l'id et le nom (label) des recettes dépendantes des sélection
	getSelectedRecipes = () => 
	{
		//console.log("get selected recipes called");

		let newArray: RecipeTagInterface[] = [];

		if (!(this.state.currentMenues.selectedMenu))
		{
			console.log("error with the selected menu state");
			return ; 
		}

		if (this.state.currentMenues.selectedMenu.length === 3)
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
		console.log("get selected recipes called ", newArray)
		return (newArray);
	}

	render() {
		return (
		<>
			<div style={{textAlign: "center"}}>
				<MenuContext.Provider
					value={
						{currentMenues: {
							selectedMenu: this.state.currentMenues.selectedMenu,
							menuTags: this.state.currentMenues.menuTags,
							maxSelection: 3}, 
						onSelect: {
							handleSelection: this.handleMenuSelection},
						getClassName: {
							getClassName: this.getClassName}
						}}>
				<RecipeContext.Provider
					value={
						{currentRecipes: {
							recipeTags: this.state.currentRecipes.recipeTags,
							selectedRecipes: this.state.currentRecipes.selectedRecipes,
							},
						onSelectRecipe: {handleSelection: this.handleRecipeSelection},
						getRecipesToDisplay: {getRecipesToDisplay: this.getRecipesToDisplay},
						getSelectedMenuTags: {getSelectedMenuTags: this.getSelectedMenuTags},
						getSelectedRecipesTags: {getSelectedRecipesTags: this.getSelectedRecipesTags},
					}}>
					
					<Header />
					<Presentation />
					<Tag />
					<Recipe />
					<Footer />
					<br/>
					</RecipeContext.Provider>
				</MenuContext.Provider>
				</div>
		</>)
	}
}
