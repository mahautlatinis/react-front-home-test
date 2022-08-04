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

  handleMenuSelection = async(args: number) =>  {
  let newArray: number[] = [];

  if (this.state.currentMenues.selectedMenu.includes(args))
  {
    for (let i = 0; i < this.state.currentMenues.selectedMenu.length; i++)
    {
      if (this.state.currentMenues.selectedMenu[i] != args)
      {
        newArray.push(this.state.currentMenues.selectedMenu[i])
      }
    }
  }
  else
  {
    newArray = this.state.currentMenues.selectedMenu;
    if (this.state.currentMenues.selectedMenu.includes(0))
      newArray = [args]
    else if (args == 0)
    {
      newArray = [0];
    }
    else
    {
      
      newArray = [...this.state.currentMenues.selectedMenu, args];
    }
  }
  await this.setState({
              currentMenues: {
                selectedMenu: newArray,
                menuTags: this.state.currentMenues.menuTags,
                maxSelection: this.state.currentMenues.maxSelection
                }
              })
  if (args != 0)
    this.onMenuSelectionDisplayRecipes();
  }

  onMenuSelectionDisplayRecipes()
  {
    let newArray: RecipeTagInterface[] = []

    if (this.state.currentMenues.selectedMenu.includes(0))
    {
      return;
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
    }

    this.setState({
      currentMenues: {
                selectedMenu: this.state.currentMenues.selectedMenu,
                menuTags: this.state.currentMenues.menuTags,
                maxSelection: this.state.currentMenues.maxSelection
                }
                ,
      currentRecipes: {
        recipeTags: newArray}
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
              {/* Header */}
              <Tag />
          </MenuContext.Provider>
        </div>
      </div>
    );
  }
}
