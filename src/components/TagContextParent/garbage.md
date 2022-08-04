import React from "react"
import { AppState, appStateInitializer } from "../../interfaces/App/App.interface"
import { RecipeTagInterface } from "../../interfaces/Tag/RecipeTag.interface";
import "../../assets/styles/styles.css"
import Tag from "../../components/Displaying/Tag/Tag";
import MenuContextInterface, { MenuContext } from "../../context/MenuContext";
import { menuTagList } from "../../assets/mock_data/TagData";
import { MenuTagInterface } from "../../interfaces/Tag/MenuTag.interface"
import {RecipeContext} from "../../context/RecipeContext";
import { RecipeTagList } from "../../assets/mock_data/TagData";
import Recipe  from "../../components/Displaying/Recipe/Recipe"

export default class Garbage extends React.Component {


	//TODO: a supprimer
	getCorrespondingTag = (id: number) => {
		//console.log(id);
		let all = menuTagList;
		let i = 0;
		while (i < menuTagList.length)
		{
			if (menuTagList[i].id === id)
            {
				//console.log("tags " + menuTagList[i].tags);
				return menuTagList[i].tags;
			}
			i++;
		}
		//console.log("tags :" + tags);
	}

	//Permet d'afficher et retourner les recettes sélectionnables en fonction du menu, update du contexte
	//TODO: a ne plus utiliser 
	onMenuSelectionDisplayRecipes = () => {
		let newArray: any[] = [];
		
		//console.log("On menu Selection called");

		//if (this.state.currentMenues.selectedMenu.includes(0))
		//	return [];

		//console.log("the selected menu is " + JSON.stringify(this.state.currentMenues));

		//console.log("menu tags are " + JSON.stringify(this.state.currentMenues.selectedMenu.))
		let tags: any;
		//let tagsId: number[] = [];

		//let TagsName: string[] = [""];

	//	if (this.state.currentMenues.selectedMenu)
	//	{
	//		for (let i = 0; i < this.state.currentMenues.selectedMenu.length; i++)
	//		{
	//			let len: any = 0
	//			//len = this.state.currentMenues.menuTags[i].tags?.length
	//			//console.log(this.state.currentMenues.selectedMenu[i])
	//			tags = this.getCorrespondingTag(this.state.currentMenues.selectedMenu[i]);

	//			//console.log("tag is " + JSON.stringify(tags));
	//			//newArray.push(tags)
	//			newArray = [...newArray, tags]
	//			//console.log("")
	//			//for (let j = 0; j < len; j++)
	//			//	newArray = [...newArray, this.state.currentMenues.menuTags[i].tags[j]]
	//		}
	//	}
	//	console.log("new array 1. " + JSON.stringify(newArray));
	//	return (newArray);
	//	//return ({tagsId: tagsId, TagsName: TagsName});
	//}

	//Permet de sélectionner les menus, mise à jour du contexte
	//handleMenuSelection = (id: number) =>  {
	//	if (!id)
	//		return;

	//	//console.log("handle menu selection called");

	//	let newArray: number[] = [];

	//	//if (this.state.currentMenues.selectedMenu.includes(id))
	//	//{
	//	//	for (let i = 0; i < this.state.currentMenues.selectedMenu.length; i++)
	//	//	{
	//	//		if (this.state.currentMenues.selectedMenu[i] != id)
	//	//			newArray.push(this.state.currentMenues.selectedMenu[i])
	//	//	}
	//	//}
	//	//else
	//	//{
	//	//	newArray = this.state.currentMenues.selectedMenu;
	//	//	if (this.state.currentMenues.selectedMenu.includes(0))
	//	//		newArray = [id]
	//	//	else if (id == 0)
	//	//		newArray = [0];
	//	//	else
	//	//		newArray = [...this.state.currentMenues.selectedMenu, id];
	//	//}
	//	//this.setState({
	//	//	currentMenues: {
	//	//		selectedMenu: newArray,
	//	//		menuTags: this.state.currentMenues.menuTags,
	//	//		maxSelection: this.state.currentMenues.maxSelection
	//	//	}}, () => {
	//	//		//console.log("updating...");
	//	//		this.getClearedRecipes();
	//	//		//Pour le tag "all"
	//	//		//if (id != 0)
	//	//		//	this.onMenuSelectionDisplayRecipes();
	//	//	})
	//	//Permet de faire en sorte que l'affichage se mette à jour, attention c'est lent
		
	//}

	//Permet de récupérer les potentielles recettes en fonction du menu sélectionné
	////TODO: a revoir
	//getSelectedRecipes = () => 
	//{
	//	//console.log("get selected recipes");

	//	let newArray: RecipeTagInterface[] | any = this.onMenuSelectionDisplayRecipes();
	//	//console.log("new recipeTag Interface : " + JSON.stringify(newArray));
	//	let newArrayId: number[] = [];

	//	let i = 0;	let len: number | undefined = newArray?.length;
	//	while (len && i < len)	
	//	{
	//		if (!(newArray[i].id in newArrayId))
	//			newArrayId = [...newArrayId, newArray[i].id];
	//		i++;
	//	}
	//	//console.log(JSON.stringify(newArray));
		
	//	return (newArray);
	//}

	////Permet de filtrer pour qu'il n'y ait pas de doublons dans les tags recettes
	//setClearedRecipes = (cleared: any, clearedNames: string[]) =>
	//{
	//	//console.log("Updating cleared recipes");

	//	//console.log("cleared : " + JSON.stringify(cleared));
		
	//	//console.log("clearedNames : " + clearedNames);

	//	//this.setState({
	//	//	currentMenues: {
	//	//		selectedMenu: this.state.currentMenues.selectedMenu,
	//	//		menuTags: this.state.currentMenues.menuTags,
	//	//		maxSelection: this.state.currentMenues.maxSelection
	//	//	},
	//	//	currentRecipes: {
	//	//		preSelectedRecipes: this.state.currentRecipes.preSelectedRecipes,
	//	//		selectedRecipes: this.state.currentRecipes.selectedRecipes,
	//	//		recipeTags: this.state.currentRecipes.recipeTags,
	//	//		clearedRecipes: cleared,
	//	//		clearedRecipesNames: clearedNames,
	//	//		maxSelection: this.state.currentRecipes.maxSelection
	//	//	}
	//	//})
	//}

	//getClearedRecipes = () => 
	//{
	//	//console.log("Get cleared recipes called");

	//	//let newArray: any = this.onMenuSelectionDisplayRecipes();

	//	//console.log("New array " + JSON.stringify(newArray[0]));
	//	console.log("--------");
	//	//console.log(newArray[Object.keys();

	//	//let newArraylabels: string[] = this.getCorrespondingTagById();
	//	//let idLabels: number[] =  this.getCorrespondingTagByLabel();;
		

	//	//newArray.forEach( recipe => {
	//		//console.log("recipe tag " + JSON.stringify(recipeTag));
	//		//console.log(id + " " + label);
	//		//if (recipeTag.label && !(newArraylabels.includes(recipeTag.label)))
	//		//{
	//		//	newArraylabels = [...newArraylabels, recipeTag.label];
	//		//}
	//	//})

	//	//console.log("resulting newArraylabels" + newArraylabels);

	//	//Si "all" était sélectionné
	//	//if (newArray.length == 0)
	//	//	newArray = RecipeTagList;

	//	//if (newArraylabels.length == 0)
	//	//{
	//	//	let i = 0;
	//	//	newArraylabels = []
	//	//	while (i < RecipeTagList.length)
	//	//	{
	//	//		if (RecipeTagList[i].label)
	//	//			newArraylabels.push(RecipeTagList[i].label)
	//	//		i++;
	//	//	}
	//	//	//return;
	//	//}

	//	//this.setClearedRecipes(newArray, newArraylabels);

	//	//console.log("new array labels : " + newArraylabels);
	//	//console.log("new Array" + JSON.stringify(newArray));

	//	//this.setState({
	//	//	currentMenues: {
	//	//		selectedMenu: this.state.currentMenues.selectedMenu,
	//	//		menuTags: this.state.currentMenues.menuTags,
	//	//		maxSelection: this.state.currentMenues.maxSelection
	//	//	},
	//	//	currentRecipes: {
	//	//		preSelectedRecipes: this.state.currentRecipes.preSelectedRecipes,
	//	//		selectedRecipes: this.state.currentRecipes.selectedRecipes,
	//	//		recipeTags: this.state.currentRecipes.recipeTags,
	//	//		clearedRecipes: newArray,
	//	//		clearedRecipesNames: newArraylabels,
	//	//		maxSelection: this.state.currentRecipes.maxSelection
	//	//}})
	//}

	//componentDidUpdate()
	//{
	//	//this.getSelectedRecipes();
	//	//this.getClearedRecipes();
	//	console.log("parent updated")
	//}

//	render() {
//		return (
//		<>
//		</>
//	}
//}
