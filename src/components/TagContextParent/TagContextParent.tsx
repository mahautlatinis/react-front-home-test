import React from "react"
import { AppState, appStateInitializer } from "../../interfaces/App/App.interface"
import { RecipeTagInterface } from "../../interfaces/Tag/RecipeTag.interface";
import "../../assets/styles/styles.css"
import Tag from "../../components/Displaying/Tag/Tag";
import MenuContextInterface, { MenuContext } from "../../context/MenuContext";
import { menuTagList } from "../../assets/mock_data/TagData";
import { MenuTagInterface } from "../../interfaces/Tag/MenuTag.interface"
import {RecipeContext} from "../../context/RecipeContext";

export default class TagContextParent extends React.Component<{}, AppState> {

	constructor(props: any) {
    super(props);
		this.state = appStateInitializer
	}

	//Permet d'afficher et retourner les recettes sélectionnables en fonction du menu, update du contexte
	onMenuSelectionDisplayRecipes = async() => {
		let newArray: RecipeTagInterface[] = []
		if (this.state.currentMenues.selectedMenu.includes(0))
			return [];

		if (this.state.currentMenues.selectedMenu)
		{
			for (let i = 0; i < this.state.currentMenues.selectedMenu.length; i++)
			{
				let len: any = 0
				len = this.state.currentMenues.menuTags[i].tags?.length
				for (let j = 0; j < len; j++)
					newArray = [...newArray, this.state.currentMenues.menuTags[i].tags[j]]
			}
		}
    await this.setState({
		currentMenues: {
            selectedMenu: this.state.currentMenues.selectedMenu,
            menuTags: this.state.currentMenues.menuTags,
            maxSelection: this.state.currentMenues.maxSelection},
		currentRecipes: {
			preSelectedRecipes: this.state.currentRecipes.preSelectedRecipes,
			selectedRecipes: this.getSelectedRecipes(),
			recipeTags: newArray}
    })
    return (newArray);
	}

	//Permet de sélectionner les recettes (sélectionnables) en fonction du menu, mise à jour du contexte
	handleRecipeSelection = async(id: number) => {
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

    await this.setState
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
			maxSelection: newArray.length
		}})
	}

	//Permet de sélectionner les menus, mise à jour du contexte
	handleMenuSelection = async(id: number) =>  {
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
		await this.setState({
			currentMenues: {
				selectedMenu: newArray,
				menuTags: this.state.currentMenues.menuTags,
				maxSelection: this.state.currentMenues.maxSelection
			}})
		//Permet de faire en sorte que l'affichage se mette à jour, attention c'est lent
		if (id != 0)
			this.onMenuSelectionDisplayRecipes();
	}

	//Permet de récupérer les potentielles recettes en fonction du menu sélectionné
	getSelectedRecipes = () => 
	{
		let newArray: RecipeTagInterface[] | any =  this.onMenuSelectionDisplayRecipes();
		let newArrayId: number[] = [];

		let i = 0;	let len: number | undefined = newArray?.length;
		while (len && i < len && newArray)	
		{
			if (!(newArray[i].id in newArrayId))
				newArrayId = [...newArrayId, newArray[i].id];
			i++;
		}
		return newArrayId;
	}

	render(): React.ReactNode {
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
						maxSelection: this.state.currentRecipes.maxSelection
                    },
                    onSelectRecipe: {
						handleSelection: this.handleRecipeSelection
                    }}}>
              {/* Header */}
                <Tag />
				</RecipeContext.Provider>
			</MenuContext.Provider>
		</>)
	}
}
