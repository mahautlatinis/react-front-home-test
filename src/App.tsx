import React, { Component, useState, useEffect } from "react";
import "./assets/styles/styles.css"
import Tag from "./components/Displaying/Tag/Tag";
import MenuContextInterface, { MenuContext } from "./context/MenuContext";
import { menuTagList } from "./assets/mock_data/TagData";
import { MenuTagInterface } from "./interfaces/Tag/MenuTag.interface"
import { RecipeTagInterface } from "./interfaces/Tag/RecipeTag.interface";
import {RecipeContext} from "./context/RecipeContext";
import { AppState, appStateInitializer } from "./interfaces/App/App.interface";

export default class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = appStateInitializer
  }

  handleRecipeSelection = async(id: number) => {
    //console.log(id);
    let newArray: number[] | undefined = [];
  
    if (this.state.currentRecipes.selectedRecipes.includes(id))
    {
      for (let i = 0; i < this.state.currentRecipes.selectedRecipes.length; i++)
      {
        if (this.state.currentRecipes.selectedRecipes[i] != id)
        {
          newArray.push(this.state.currentRecipes.selectedRecipes[i])
        }
      }
    }
    else
    {
      newArray = this.state.currentRecipes.preSelectedRecipes;
      if (this.state.currentRecipes.selectedRecipes?.includes(0))
      {
        newArray = [id];
      }
      else if (id == 0)
      {
        newArray = [0];
      }
      else
      {
        newArray = [...this.state.currentRecipes.selectedRecipes, id];
      }
    }
    await this.setState({
      currentMenues: {
        selectedMenu: this.state.currentMenues.selectedMenu,
        menuTags: this.state.currentMenues.menuTags,
        maxSelection: this.state.currentMenues.maxSelection
        },
        currentRecipes: {
          preSelectedRecipes: this.state.currentRecipes.preSelectedRecipes,
          selectedRecipes: newArray,
          recipeTags: this.state.currentRecipes.recipeTags,
          maxSelection: this.state.currentRecipes.maxSelection
        }
    })
  }

  getSelectedRecipes = () => {
    let newArray: RecipeTagInterface[] | undefined = this.onMenuSelectionDisplayRecipes();
    let newArrayId: number[] = [];

    let i = 0;
    let len: number | undefined = newArray?.length;
    //console.log("len is " + len);
    while (len && i < len && newArray)
    {
      if (!(newArray[i].id in newArrayId))
        newArrayId = [...newArrayId, newArray[i].id];
      i++;
    }
    //console.log("new arred id " + newArrayId)
    return newArrayId;
  }

  handleMenuSelection = async(id: number) =>  {
  let newArray: number[] = [];

  if (this.state.currentMenues.selectedMenu.includes(id))
  {
    for (let i = 0; i < this.state.currentMenues.selectedMenu.length; i++)
    {
      if (this.state.currentMenues.selectedMenu[i] != id)
      {
        newArray.push(this.state.currentMenues.selectedMenu[i])
      }
    }
  }
  else
  {
    newArray = this.state.currentMenues.selectedMenu;
    if (this.state.currentMenues.selectedMenu.includes(0))
      newArray = [id]
    else if (id == 0)
    {
      newArray = [0];
    }
    else
    {
      
      newArray = [...this.state.currentMenues.selectedMenu, id];
    }
  }
  await this.setState({
              currentMenues: {
                selectedMenu: newArray,
                menuTags: this.state.currentMenues.menuTags,
                maxSelection: this.state.currentMenues.maxSelection
                }
              })
  if (id != 0)
    this.onMenuSelectionDisplayRecipes();
  }


  //TODO: a renommer 
  onMenuSelectionDisplayRecipes(): RecipeTagInterface[] | undefined
  {
    let newArray: RecipeTagInterface[] = []
    //const [estimatedRecipesTags, setEstimatedRecipesTags] = useState([])

    if (this.state.currentMenues.selectedMenu.includes(0))
    {
      return [];
    }

    if (this.state.currentMenues.selectedMenu)
    {
      for (let i = 0; i < this.state.currentMenues.selectedMenu.length; i++)
      {
        let len: any = 0
        len = this.state.currentMenues.menuTags[i].tags?.length
        for (let j = 0; j < len; j++)
        {
          newArray = [...newArray, this.state.currentMenues.menuTags[i].tags[j]]
        }
      }
      return (newArray)
    }

    this.setState({
      currentMenues: {
                selectedMenu: this.state.currentMenues.selectedMenu,
                menuTags: this.state.currentMenues.menuTags,
                maxSelection: this.state.currentMenues.maxSelection
                }
                ,
      currentRecipes: {
        preSelectedRecipes: this.state.currentRecipes.preSelectedRecipes,
        selectedRecipes: this.state.currentRecipes.selectedRecipes,
        recipeTags: newArray,
        maxSelection: this.state.currentRecipes.maxSelection
      }
    })
  }

  render () {
    return (
      <div className="App">
        <div className="app-container">
          {/*<h1>Super Cook App</h1>*/}
          {/*<h2>Bienvenue sur notre Super Cook App ✨ !</h2>*/}
          {/*<p>Chaque menu propose différentes recettes adaptées à vos besoins et envies.</p>*/}
          <MenuContext.Provider
                value={
                    {currentMenues: {
                        selectedMenu: this.state.currentMenues.selectedMenu,
                        menuTags: this.state.currentMenues.menuTags,
                        maxSelection: 3}, 
                      onSelect: {
                        handleSelection: this.handleMenuSelection}
                      }}
            >
              <RecipeContext.Provider
                value={
                  {
                    currentRecipes: {
                      preSelectedRecipes: this.state.currentRecipes.preSelectedRecipes,
                      selectedRecipes: this.state.currentRecipes.selectedRecipes,
                      recipeTags: this.state.currentRecipes.recipeTags,
                      maxSelection: this.state.currentRecipes.maxSelection
                    },
                    onSelectRecipe: {
                      handleSelection: this.handleRecipeSelection
                    }
                  }
                }
              >
              {/* Header */}
                <Tag />
              </RecipeContext.Provider>
          </MenuContext.Provider>
        </div>
      </div>
    );
  }
}
