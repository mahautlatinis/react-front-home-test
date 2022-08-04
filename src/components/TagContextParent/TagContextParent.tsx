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

export default class TagContextParent extends React.Component<{}, AppState> {

	constructor(props: any) {
    super(props);
		this.state = appStateInitializer
	}

	//TODO: a reprendre 
	getCorrespondingTagById = (id: number) => {
		//console.log(id);
		let all = menuTagList;
		let i = 0;
		while (i < menuTagList.length)
		{
			if (menuTagList[i].id === id)
            {
				console.log("tags " + menuTagList[i].tags);
				return menuTagList[i].tags;
			}
			i++;
		}
	}


	//Permet de sélectionner les recettes (sélectionnables) en fonction du menu, mise à jour du contexte
	handleRecipeSelection = (id: number) => {

	console.log("handle recipe called");

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
		if (this.state.currentRecipes.selectedRecipes?.includes(0))
			newArray = [id];
		else if (id == 0 )
			newArray = [0];
		else
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
			preSelectedRecipes: this.state.currentRecipes.preSelectedRecipes,
			selectedRecipes: newArray,
			recipeTags: this.state.currentRecipes.recipeTags,
			clearedRecipes: this.state.currentRecipes.clearedRecipes,
			clearedRecipesNames: this.state.currentRecipes.clearedRecipesNames,
			maxSelection: newArray.length
		}})
	}

	//Permet de sélectionner les menus, mise à jour du contexte
	handleMenuSelection = (id: number) =>  {
		if (!id)
			return;

		//console.log("handle menu selection called");

		let newArray: number[] = [];

		if (this.state.currentMenues.selectedMenu.includes(id))
		{
			for (let i = 0; i < this.state.currentMenues.selectedMenu.length; i++)
			{
				if (this.state.currentMenues.selectedMenu[i] != id)
					newArray.push(this.state.currentMenues.selectedMenu[i])
			}
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
			}}, () => {
				//console.log("updating...");
				this.getClearedRecipes();
				//Pour le tag "all"
				//if (id != 0)
				//	this.onMenuSelectionDisplayRecipes();
			})
		//Permet de faire en sorte que l'affichage se mette à jour, attention c'est lent
		
	}

	//Permet de récupérer les potentielles recettes en fonction du menu sélectionné
	//TODO: a revoir
	getSelectedRecipes = () => 
	{
		//console.log("get selected recipes");

		//let newArray: RecipeTagInterface[] | any = this.onMenuSelectionDisplayRecipes();
		let newArray: RecipeTagInterface[] | any = [];

		//console.log("new recipeTag Interface : " + JSON.stringify(newArray));
		let newArrayId: number[] = [];

		let i = 0;	let len: number | undefined = newArray?.length;
		while (len && i < len)	
		{
			if (!(newArray[i].id in newArrayId))
				newArrayId = [...newArrayId, newArray[i].id];
			i++;
		}
		//console.log(JSON.stringify(newArray));
		
		return (newArray);
	}

	//Permet de filtrer pour qu'il n'y ait pas de doublons dans les tags recettes
	setClearedRecipes = (cleared: any, clearedNames: string[]) =>
	{
		//console.log("Updating cleared recipes");

		//console.log("cleared : " + JSON.stringify(cleared));
		
		//console.log("clearedNames : " + clearedNames);

		this.setState({
			currentMenues: {
				selectedMenu: this.state.currentMenues.selectedMenu,
				menuTags: this.state.currentMenues.menuTags,
				maxSelection: this.state.currentMenues.maxSelection
			},
			currentRecipes: {
				preSelectedRecipes: this.state.currentRecipes.preSelectedRecipes,
				selectedRecipes: this.state.currentRecipes.selectedRecipes,
				recipeTags: this.state.currentRecipes.recipeTags,
				clearedRecipes: cleared,
				clearedRecipesNames: clearedNames,
				maxSelection: this.state.currentRecipes.maxSelection
			}
		})
	}

	getClearedRecipes = () => 
	{
		console.log("--------");
		//let newArraylabels: string[] = this.getCorrespondingTagById();

	}

	componentDidUpdate()
	{
		//console.log("parent updated")
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
                value={{
                    currentRecipes: {
						preSelectedRecipes: this.state.currentRecipes.preSelectedRecipes,
						selectedRecipes: this.state.currentRecipes.selectedRecipes,
						recipeTags: this.state.currentRecipes.recipeTags,
						clearedRecipes: this.state.currentRecipes.clearedRecipes,
						maxSelection: this.state.currentRecipes.maxSelection
                    },
                    onSelectRecipe: {
						handleSelection: this.handleRecipeSelection}
					}}>
              {/* Header */}
                <Tag />
				{/*<Recipe />*/}
				</RecipeContext.Provider>
			</MenuContext.Provider>
		</>)
	}
}
